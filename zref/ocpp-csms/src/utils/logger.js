import winston from "winston";
import fs from "fs";

// Ensure logs directory exists
if (!fs.existsSync("logs")) {
    fs.mkdirSync("logs");
}

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || "info",
    format: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    defaultMeta: { service: "ocpp-csms" },
    transports: [
        // Console transport with colors
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),

        // General application logs
        new winston.transports.File({
            filename: "logs/combined.log"
        }),

        // Error logs only
        new winston.transports.File({
            filename: "logs/error.log",
            level: "error"
        }),

        // OCPP traffic logs (all OCPP messages)
        new winston.transports.File({
            filename: "logs/ocpp-traffic.log",
            level: "info"
        })
    ]
});

// Helper function to log OCPP messages
export const logOcppMessage = (direction, chargerId, messageType, messageId, payload, transactionId = null) => {
    const logData = {
        direction, // "IN" or "OUT"
        chargerId,
        messageType,
        messageId,
        payload,
        transactionId,
        timestamp: new Date().toISOString()
    };

    logger.info(`📨 OCPP Message ${direction}`, logData);
};

// Helper function to log charger events
export const logChargerEvent = (event, chargerId, data = {}) => {
    logger.info(`🔌 Charger Event: ${event}`, {
        chargerId,
        event,
        ...data,
        timestamp: new Date().toISOString()
    });
};

export { logger };