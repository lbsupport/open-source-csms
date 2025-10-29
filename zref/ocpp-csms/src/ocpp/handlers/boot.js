import { logger } from "../../utils/logger.js";

/**
 * Handle BootNotification from charger
 * This is the first message sent by charger when connecting
 */
export const handleBootNotification = async (chargerId, params) => {
    try {
        // The params come directly from the OCPP message
        const {
            chargePointModel,
            chargePointVendor,
            firmwareVersion,
            chargePointSerialNumber,
            chargeBoxSerialNumber
        } = params;

        console.log(`🚀 Processing BootNotification from ${chargerId}:`, {
            chargePointModel,
            chargePointVendor,
            firmwareVersion,
            chargePointSerialNumber,
            chargeBoxSerialNumber
        });

        logger.info("🚀 Processing BootNotification", {
            chargerId,
            chargePointModel,
            chargePointVendor,
            firmwareVersion,
            chargePointSerialNumber,
            chargeBoxSerialNumber,
            timestamp: new Date().toISOString()
        });

        // For now, we'll just log the charger information
        // Later we'll store this in a database

        console.log(`✅ BootNotification processed successfully for ${chargerId}`);

        // Return response to charger
        return {
            status: "Accepted",
            currentTime: new Date().toISOString(),
            interval: 300 // Heartbeat interval in seconds (5 minutes)
        };

    } catch (error) {
        logger.error("❌ Error processing BootNotification", {
            chargerId,
            error: error.message,
            stack: error.stack,
            params,
            timestamp: new Date().toISOString()
        });

        console.log(`❌ Error processing BootNotification for ${chargerId}:`, error.message);

        // Return error response
        return {
            status: "Rejected",
            currentTime: new Date().toISOString(),
            interval: 300
        };
    }
};