import { logger } from "../../utils/logger.js";

/**
 * OCPP Authentication Middleware
 * Validates charger credentials during connection
 * For now, we'll accept all connections but log them
 */
export const authMiddleware = async (accept, reject, handshake) => {
    try {
        const chargerId = handshake.identity;

        logger.info("🔐 Starting charger authentication", {
            chargerId,
            timestamp: new Date().toISOString()
        });

        console.log(`🔐 Authenticating charger: ${chargerId}`);
        console.log(`🔐 Handshake data:`, JSON.stringify(handshake, null, 2));

        // For learning purposes, we'll accept all connections
        // In production, you'd check against a database or configuration
        const isAuthorized = true; // TODO: Add real authentication logic

        if (isAuthorized) {
            logger.info("✅ Authentication successful", {
                chargerId,
                timestamp: new Date().toISOString()
            });

            console.log(`✅ Authentication successful for charger: ${chargerId}`);

            // Accept connection with session info
            accept({
                sessionId: chargerId,
                chargerInfo: {
                    id: chargerId,
                    name: `Charger ${chargerId}`,
                    authorized: true
                }
            });
        } else {
            logger.warn("❌ Authentication failed - charger not authorized", {
                chargerId,
                timestamp: new Date().toISOString()
            });

            console.log(`❌ Authentication failed for charger: ${chargerId}`);
            reject();
        }

    } catch (error) {
        logger.error("❌ Authentication error", {
            chargerId: handshake.identity,
            error: error.message,
            timestamp: new Date().toISOString()
        });

        console.log(`❌ Authentication error:`, error.message);
        reject();
    }
};