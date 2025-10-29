import { logger } from "../../utils/logger.js";
import { updateChargerHeartbeat } from "../middleware/connection.js";

/**
 * Handle Heartbeat from charger
 * Keep-alive message sent periodically by charger
 */
export const handleHeartbeat = async (chargerId) => {
    try {
        console.log(`💓 Processing Heartbeat from ${chargerId}`);

        // Update charger heartbeat timestamp
        updateChargerHeartbeat(chargerId);

        logger.debug("💓 Processing Heartbeat", {
            chargerId,
            timestamp: new Date().toISOString()
        });

        console.log(`✅ Heartbeat processed successfully for ${chargerId}`);

        // Return current server time
        return {
            currentTime: new Date().toISOString()
        };

    } catch (error) {
        logger.error("❌ Error processing Heartbeat", {
            chargerId,
            error: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        });

        console.log(`❌ Error processing Heartbeat for ${chargerId}:`, error.message);

        // Return current time even on error
        return {
            currentTime: new Date().toISOString()
        };
    }
};