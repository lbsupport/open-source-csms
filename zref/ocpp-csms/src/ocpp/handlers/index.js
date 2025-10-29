import { logger } from "../../utils/logger.js";
import { createRPCError } from "ocpp-rpc";

// Import individual handlers
import { handleBootNotification } from "./boot.js";
import { handleHeartbeat } from "./heartbeat.js";
import { handleStatusNotification } from "./status.js";
import { handleAuthorize } from "./authorize.js";
import { handleStartTransaction, handleStopTransaction } from "./transaction.js";
import { handleMeterValues } from "./meter.js";

/**
 * Register all OCPP message handlers for a client
 */
export const registerHandlers = (client, chargerId) => {
    logger.info("📋 Registering OCPP message handlers", {
        chargerId,
        timestamp: new Date().toISOString()
    });

    console.log(`📋 Registering OCPP handlers for charger: ${chargerId}`);

    // BootNotification - First message sent by charger when connecting
    client.handle("BootNotification", async (params) => {
        console.log(`🚀 BootNotification received from ${chargerId}:`, JSON.stringify(params, null, 2));
        return await handleBootNotification(chargerId, params);
    });

    // Heartbeat - Keep-alive message sent periodically by charger
    client.handle("Heartbeat", async () => {
        console.log(`💓 Heartbeat received from ${chargerId}`);
        return await handleHeartbeat(chargerId);
    });

    // StatusNotification - Connector status updates
    client.handle("StatusNotification", async (params) => {
        console.log(`📊 StatusNotification received from ${chargerId}:`, JSON.stringify(params, null, 2));
        return await handleStatusNotification(chargerId, params);
    });

    // Authorize - User authorization
    client.handle("Authorize", async (params) => {
        console.log(`🔑 Authorize received from ${chargerId}:`, JSON.stringify(params, null, 2));
        return await handleAuthorize(chargerId, params);
    });

    // StartTransaction - Transaction start
    client.handle("StartTransaction", async (params) => {
        console.log(`🚀 StartTransaction received from ${chargerId}:`, JSON.stringify(params, null, 2));
        return await handleStartTransaction(chargerId, params);
    });

    // StopTransaction - Transaction stop
    client.handle("StopTransaction", async (params) => {
        console.log(`🛑 StopTransaction received from ${chargerId}:`, JSON.stringify(params, null, 2));
        return await handleStopTransaction(chargerId, params);
    });

    // MeterValues - Energy meter readings
    client.handle("MeterValues", async (params) => {
        console.log(`🔢 MeterValues received from ${chargerId}:`, JSON.stringify(params, null, 2));
        return await handleMeterValues(chargerId, params);
    });

    // Catch-all handler for unimplemented methods
    client.handle(({ method, params }) => {
        console.log(`⚠️ Unhandled OCPP method received from ${chargerId}:`, method);
        console.log(`⚠️ Parameters:`, JSON.stringify(params, null, 2));

        throw createRPCError("NotImplemented", `Method ${method} not implemented`);
    });

    logger.info("✅ All OCPP message handlers registered", {
        chargerId,
        timestamp: new Date().toISOString()
    });

    console.log(`✅ All OCPP handlers registered for charger: ${chargerId}`);
};