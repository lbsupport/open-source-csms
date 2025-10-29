import express from "express";
import { logger } from "../../utils/logger.js";
import fs from "fs";
import path from "path";

const router = express.Router();

/**
 * GET /api/logs
 * Get recent system logs
 */
router.get("/", async (req, res) => {
    try {
        const { limit = 100, level } = req.query;
        
        logger.info("📋 Fetching system logs via API", {
            limit,
            level,
            timestamp: new Date().toISOString()
        });

        const logFiles = [
            "logs/combined.log",
            "logs/ocpp-traffic.log",
            "logs/error.log"
        ];

        let allLogs = [];

        // Read log files
        for (const logFile of logFiles) {
            if (fs.existsSync(logFile)) {
                try {
                    const content = fs.readFileSync(logFile, 'utf8');
                    const lines = content.split('\n').filter(line => line.trim());
                    
                    lines.forEach(line => {
                        try {
                            const logEntry = JSON.parse(line);
                            
                            // Filter by level if specified
                            if (level && logEntry.level !== level) {
                                return;
                            }
                            
                            allLogs.push({
                                timestamp: logEntry.timestamp,
                                level: logEntry.level,
                                message: logEntry.message,
                                service: logEntry.service,
                                chargerId: logEntry.chargerId || null,
                                source: path.basename(logFile)
                            });
                        } catch (parseError) {
                            // Handle non-JSON log entries
                            allLogs.push({
                                timestamp: new Date().toISOString(),
                                level: 'info',
                                message: line,
                                service: 'ocpp-csms',
                                source: path.basename(logFile)
                            });
                        }
                    });
                } catch (readError) {
                    console.error(`Error reading log file ${logFile}:`, readError.message);
                }
            }
        }

        // Sort by timestamp (newest first)
        allLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        // Apply limit
        const limitedLogs = allLogs.slice(0, parseInt(limit));

        res.json({
            success: true,
            data: limitedLogs,
            count: limitedLogs.length,
            total: allLogs.length,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        logger.error("❌ Error fetching logs via API", {
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
 * GET /api/logs/charger/:chargerId
 * Get logs for a specific charger
 */
router.get("/charger/:chargerId", async (req, res) => {
    try {
        const { chargerId } = req.params;
        const { limit = 50 } = req.query;
        
        logger.info("📋 Fetching charger logs via API", {
            chargerId,
            limit,
            timestamp: new Date().toISOString()
        });

        const logFiles = [
            "logs/combined.log",
            "logs/ocpp-traffic.log"
        ];

        let chargerLogs = [];

        // Read log files
        for (const logFile of logFiles) {
            if (fs.existsSync(logFile)) {
                try {
                    const content = fs.readFileSync(logFile, 'utf8');
                    const lines = content.split('\n').filter(line => line.trim());
                    
                    lines.forEach(line => {
                        try {
                            const logEntry = JSON.parse(line);
                            
                            // Filter by charger ID
                            if (logEntry.chargerId === chargerId) {
                                chargerLogs.push({
                                    timestamp: logEntry.timestamp,
                                    level: logEntry.level,
                                    message: logEntry.message,
                                    service: logEntry.service,
                                    chargerId: logEntry.chargerId,
                                    source: path.basename(logFile)
                                });
                            }
                        } catch (parseError) {
                            // Skip non-JSON entries for charger-specific logs
                        }
                    });
                } catch (readError) {
                    console.error(`Error reading log file ${logFile}:`, readError.message);
                }
            }
        }

        // Sort by timestamp (newest first)
        chargerLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        // Apply limit
        const limitedLogs = chargerLogs.slice(0, parseInt(limit));

        res.json({
            success: true,
            data: limitedLogs,
            count: limitedLogs.length,
            total: chargerLogs.length,
            chargerId,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        logger.error("❌ Error fetching charger logs via API", {
            chargerId: req.params.chargerId,
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
 * DELETE /api/logs
 * Clear log files (for development/testing)
 */
router.delete("/", async (req, res) => {
    try {
        logger.info("🗑️ Clearing log files via API", {
            timestamp: new Date().toISOString()
        });

        const logFiles = [
            "logs/combined.log",
            "logs/ocpp-traffic.log",
            "logs/error.log"
        ];

        let clearedFiles = 0;

        logFiles.forEach(logFile => {
            if (fs.existsSync(logFile)) {
                try {
                    fs.writeFileSync(logFile, '');
                    clearedFiles++;
                } catch (writeError) {
                    console.error(`Error clearing log file ${logFile}:`, writeError.message);
                }
            }
        });

        res.json({
            success: true,
            message: `Cleared ${clearedFiles} log files`,
            clearedFiles,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        logger.error("❌ Error clearing logs via API", {
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
