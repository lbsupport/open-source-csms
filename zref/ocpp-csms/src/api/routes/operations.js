import express from "express";
import { logger } from "../../utils/logger.js";
import {
    executeRemoteStartTransaction,
    executeRemoteStopTransaction,
    executeReset,
    executeChangeConfiguration,
    executeGetConfiguration,
    isChargerConnected
} from "../../ocpp/operations/index.js";

const router = express.Router();

/**
 * POST /api/operations/remote-start
 * Start transaction remotely
 */
router.post("/remote-start", async (req, res) => {
    try {
        const { chargerId, connectorId, idTag } = req.body;
        
        logger.info("🚀 Executing remote start transaction via API", {
            chargerId,
            connectorId,
            idTag,
            timestamp: new Date().toISOString()
        });

        // Validate input
        if (!chargerId || !connectorId || !idTag) {
            return res.status(400).json({
                success: false,
                error: "Missing required fields: chargerId, connectorId, idTag",
                timestamp: new Date().toISOString()
            });
        }

        // Check if charger is connected
        if (!isChargerConnected(chargerId)) {
            return res.status(400).json({
                success: false,
                error: `Charger ${chargerId} is not connected`,
                timestamp: new Date().toISOString()
            });
        }

        const result = await executeRemoteStartTransaction(chargerId, connectorId, idTag);

        res.json({
            success: true,
            data: result,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        logger.error("❌ Error executing remote start transaction via API", {
            error: error.message,
            requestBody: req.body,
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
 * POST /api/operations/remote-stop
 * Stop transaction remotely
 */
router.post("/remote-stop", async (req, res) => {
    try {
        const { chargerId, transactionId } = req.body;
        
        logger.info("🛑 Executing remote stop transaction via API", {
            chargerId,
            transactionId,
            timestamp: new Date().toISOString()
        });

        // Validate input
        if (!chargerId || !transactionId) {
            return res.status(400).json({
                success: false,
                error: "Missing required fields: chargerId, transactionId",
                timestamp: new Date().toISOString()
            });
        }

        // Check if charger is connected
        if (!isChargerConnected(chargerId)) {
            return res.status(400).json({
                success: false,
                error: `Charger ${chargerId} is not connected`,
                timestamp: new Date().toISOString()
            });
        }

        const result = await executeRemoteStopTransaction(chargerId, transactionId);

        res.json({
            success: true,
            data: result,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        logger.error("❌ Error executing remote stop transaction via API", {
            error: error.message,
            requestBody: req.body,
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
 * POST /api/operations/reset
 * Reset charger
 */
router.post("/reset", async (req, res) => {
    try {
        const { chargerId, type = "Soft" } = req.body;
        
        logger.info("🔄 Executing charger reset via API", {
            chargerId,
            type,
            timestamp: new Date().toISOString()
        });

        // Validate input
        if (!chargerId) {
            return res.status(400).json({
                success: false,
                error: "Missing required field: chargerId",
                timestamp: new Date().toISOString()
            });
        }

        // Validate reset type
        if (!["Soft", "Hard"].includes(type)) {
            return res.status(400).json({
                success: false,
                error: "Invalid reset type. Must be 'Soft' or 'Hard'",
                timestamp: new Date().toISOString()
            });
        }

        // Check if charger is connected
        if (!isChargerConnected(chargerId)) {
            return res.status(400).json({
                success: false,
                error: `Charger ${chargerId} is not connected`,
                timestamp: new Date().toISOString()
            });
        }

        const result = await executeReset(chargerId, type);

        res.json({
            success: true,
            data: result,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        logger.error("❌ Error executing charger reset via API", {
            error: error.message,
            requestBody: req.body,
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
 * POST /api/operations/change-configuration
 * Change charger configuration
 */
router.post("/change-configuration", async (req, res) => {
    try {
        const { chargerId, key, value } = req.body;
        
        logger.info("⚙️ Executing change configuration via API", {
            chargerId,
            key,
            value,
            timestamp: new Date().toISOString()
        });

        // Validate input
        if (!chargerId || !key || value === undefined) {
            return res.status(400).json({
                success: false,
                error: "Missing required fields: chargerId, key, value",
                timestamp: new Date().toISOString()
            });
        }

        // Check if charger is connected
        if (!isChargerConnected(chargerId)) {
            return res.status(400).json({
                success: false,
                error: `Charger ${chargerId} is not connected`,
                timestamp: new Date().toISOString()
            });
        }

        const result = await executeChangeConfiguration(chargerId, key, value);

        res.json({
            success: true,
            data: result,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        logger.error("❌ Error executing change configuration via API", {
            error: error.message,
            requestBody: req.body,
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
 * POST /api/operations/get-configuration
 * Get charger configuration
 */
router.post("/get-configuration", async (req, res) => {
    try {
        const { chargerId, keys = [] } = req.body;
        
        logger.info("📋 Executing get configuration via API", {
            chargerId,
            keys,
            timestamp: new Date().toISOString()
        });

        // Validate input
        if (!chargerId) {
            return res.status(400).json({
                success: false,
                error: "Missing required field: chargerId",
                timestamp: new Date().toISOString()
            });
        }

        // Check if charger is connected
        if (!isChargerConnected(chargerId)) {
            return res.status(400).json({
                success: false,
                error: `Charger ${chargerId} is not connected`,
                timestamp: new Date().toISOString()
            });
        }

        const result = await executeGetConfiguration(chargerId, keys);

        res.json({
            success: true,
            data: result,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        logger.error("❌ Error executing get configuration via API", {
            error: error.message,
            requestBody: req.body,
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
