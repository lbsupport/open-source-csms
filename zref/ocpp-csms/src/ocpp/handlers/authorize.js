import { logger } from "../../utils/logger.js";
import { getChargerStatus } from "../middleware/connection.js";

/**
 * Handle Authorize from charger
 * User authorization before starting a transaction
 */
export const handleAuthorize = async (chargerId, params) => {
    try {
        const { idTag } = params;

        console.log(`🔑 Processing Authorize from ${chargerId}:`, {
            idTag
        });

        logger.info("🔑 Processing Authorize", {
            chargerId,
            idTag,
            timestamp: new Date().toISOString()
        });

        // For learning purposes, we'll accept all authorization requests
        // In production, you'd check against a user database or authorization service
        const isAuthorized = true; // TODO: Add real authorization logic

        let authStatus = "Accepted";
        let authReason = null;

        if (!isAuthorized) {
            authStatus = "Invalid";
            authReason = "Invalid user credentials";
        }

        console.log(`✅ Authorization ${authStatus} for ${chargerId}, idTag: ${idTag}`);

        // Return response to charger
        return {
            idTagInfo: {
                status: authStatus,
                expiryDate: authReason ? null : new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours from now
            }
        };

    } catch (error) {
        logger.error("❌ Error processing Authorize", {
            chargerId,
            error: error.message,
            stack: error.stack,
            params,
            timestamp: new Date().toISOString()
        });

        console.log(`❌ Error processing Authorize for ${chargerId}:`, error.message);

        // Return error response
        return {
            idTagInfo: {
                status: "Invalid"
            }
        };
    }
};