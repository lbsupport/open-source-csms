import express from "express";
import { logger } from "../../utils/logger.js";
import { getAllChargerStatuses } from "../../ocpp/middleware/connection.js";

const router = express.Router();

/**
 * GET /api/chargers
 * Get all chargers with their current status
 */
router.get("/", async (req, res) => {
    try {
        logger.info("📋 Fetching all chargers via API", {
            timestamp: new Date().toISOString()
        });

        const chargers = getAllChargerStatuses();
        
        // Transform data for API response
        const chargerData = chargers.map(charger => ({
            id: charger.id,
            connected: charger.connected,
            lastHeartbeat: charger.lastHeartbeat,
            lastBoot: charger.lastBoot,
            sessionId: charger.sessionId,
            connectors: Array.from(charger.connectors.values()),
            transactions: Array.from(charger.transactions.values()),
            disconnectedAt: charger.disconnectedAt
        }));
        
        res.json({
            success: true,
            data: chargerData,
            count: chargerData.length,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        logger.error("❌ Error fetching chargers via API", {
            error: error.message,
            timestamp: new Date().toISOString()
        });
        
        res.status(500).json({
            success: false,
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

/**
 * GET /api/chargers/:id
 * Get specific charger by ID
 */
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        
        logger.info("📋 Fetching charger by ID via API", {
            chargerId: id,
            timestamp: new Date().toISOString()
        });

        const chargers = getAllChargerStatuses();
        const charger = chargers.find(c => c.id === id);
        
        if (!charger) {
            return res.status(404).json({
                success: false,
                error: "Charger not found",
                timestamp: new Date().toISOString()
            });
        }

        const chargerData = {
            id: charger.id,
            connected: charger.connected,
            lastHeartbeat: charger.lastHeartbeat,
            lastBoot: charger.lastBoot,
            sessionId: charger.sessionId,
            connectors: Array.from(charger.connectors.values()),
            transactions: Array.from(charger.transactions.values()),
            disconnectedAt: charger.disconnectedAt
        };

        res.json({
            success: true,
            data: chargerData,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        logger.error("❌ Error fetching charger via API", {
            chargerId: req.params.id,
            error: error.message,
            timestamp: new Date().toISOString()
        });
        
        res.status(500).json({
            success: false,
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

export default router;
