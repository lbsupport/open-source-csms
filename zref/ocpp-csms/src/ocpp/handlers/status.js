import { logger } from "../../utils/logger.js";
import { updateConnectorStatus } from "../middleware/connection.js";

/**
 * Handle StatusNotification from charger
 * Reports connector status changes
 */
export const handleStatusNotification = async (chargerId, params) => {
    try {
        const {
            connectorId,
            status,
            errorCode,
            timestamp,
            info
        } = params;

        console.log(`📊 Processing StatusNotification from ${chargerId}:`, {
            connectorId,
            status,
            errorCode,
            timestamp,
            info
        });

        // Update connector status in connection management
        updateConnectorStatus(chargerId, connectorId, status, errorCode);

        logger.info("📊 Processing StatusNotification", {
            chargerId,
            connectorId,
            status,
            errorCode,
            timestamp,
            info,
            timestamp: new Date().toISOString()
        });

        console.log(`✅ StatusNotification processed successfully for ${chargerId}`);

        // StatusNotification doesn't require a response payload
        return {};

    } catch (error) {
        logger.error("❌ Error processing StatusNotification", {
            chargerId,
            error: error.message,
            stack: error.stack,
            params,
            timestamp: new Date().toISOString()
        });

        console.log(`❌ Error processing StatusNotification for ${chargerId}:`, error.message);

        // Return empty response even on error
        return {};
    }
};