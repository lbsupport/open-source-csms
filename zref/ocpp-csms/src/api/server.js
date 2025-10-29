import express from "express";
import cors from "cors";
import { logger } from "../utils/logger.js";

// Import API routes
import chargerRoutes from "./routes/chargers.js";
import operationRoutes from "./routes/operations.js";
import logRoutes from "./routes/logs.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from web directory
app.use(express.static("src/web"));

// API Routes
app.use("/api/chargers", chargerRoutes);
app.use("/api/operations", operationRoutes);
app.use("/api/logs", logRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Serve the main web interface
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "src/web" });
});

// Start HTTP server
const startHttpServer = () => {
    app.listen(PORT, () => {
        logger.info("🌐 HTTP Server started", {
            port: PORT,
            timestamp: new Date().toISOString()
        });

        console.log(`🌐 Web interface available at: http://localhost:${PORT}`);
        console.log(`📊 API endpoints available at: http://localhost:${PORT}/api`);
    });
};

export { startHttpServer };
export default app;
