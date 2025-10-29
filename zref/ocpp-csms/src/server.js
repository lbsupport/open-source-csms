import dotenv from "dotenv";
import { RPCServer } from "ocpp-rpc";
import { logger, logChargerEvent } from "./utils/logger.js";
import { setupMessageLogging } from "./ocpp/middleware/logger.js";
import { authMiddleware } from "./ocpp/middleware/auth.js";
import { registerHandlers } from "./ocpp/handlers/index.js";
import { setupConnectionManagement, handleDisconnection } from "./ocpp/middleware/connection.js";
import { startConnectionMonitoring, printConnectionStats } from "./ocpp/utils/monitoring.js";
import { startHttpServer } from "./api/server.js";

// Load environment variables
dotenv.config();

const OCPP_PORT = process.env.OCPP_PORT || 9220;

async function startOcppServer() {
    try {
        logger.info("🚀 Starting OCPP Server...", {
            port: OCPP_PORT,
            timestamp: new Date().toISOString()
        });

        // Create OCPP RPC Server
        const server = new RPCServer({
            protocols: ["ocpp1.6"],
            strictMode: true
        });

        // Setup authentication middleware
        server.auth(authMiddleware);

        // Handle new charger connections
        server.on("client", async (client) => {
            const chargerId = client.identity;

            logChargerEvent("CONNECTED", chargerId, {
                sessionId: client.sessionId,
                protocols: ["ocpp1.6"]
            });

            // Setup connection management
            const chargerStatus = setupConnectionManagement(client, chargerId);

            // Setup message logging for this charger
            setupMessageLogging(client, chargerId);

            // Register OCPP message handlers
            registerHandlers(client, chargerId);

            // Handle charger disconnection
            client.on("close", () => {
                logChargerEvent("DISCONNECTED", chargerId, {
                    sessionId: client.sessionId
                });

                // Handle disconnection cleanup
                handleDisconnection(chargerId);
            });

            // Handle errors
            client.on("error", (error) => {
                logChargerEvent("ERROR", chargerId, {
                    error: error.message,
                    stack: error.stack
                });
            });
        });

        // Start the server
        await server.listen(OCPP_PORT);

        logger.info("✅ OCPP Server started successfully!", {
            port: OCPP_PORT,
            protocols: ["ocpp1.6"],
            timestamp: new Date().toISOString()
        });

        console.log(`\n🔌 OCPP Server is running on port ${OCPP_PORT}`);
        console.log("📊 All OCPP messages will be logged to:");
        console.log("   - Console (colored output)");
        console.log("   - logs/combined.log (all logs)");
        console.log("   - logs/ocpp-traffic.log (OCPP messages only)");
        console.log("   - logs/error.log (errors only)");
        console.log("\n⏳ Waiting for charger connections...\n");

        // Start connection monitoring
        startConnectionMonitoring();

        // Print connection stats every 2 minutes
        setInterval(() => {
            printConnectionStats();
        }, 120000);

        // Start HTTP server for web interface and API
        startHttpServer();

    } catch (error) {
        logger.error("❌ Failed to start OCPP server", {
            error: error.message,
            timestamp: new Date().toISOString()
        });
        process.exit(1);
    }
}

// Start the server
startOcppServer();