import { logger } from "../../utils/logger.js";
import { registerChargerClient, unregisterChargerClient } from "../operations/index.js";

/**
 * OCPP Connection Management Middleware
 * Handles connection lifecycle events and status tracking
 */
export const setupConnectionManagement = (client, chargerId) => {
    console.log(`🔗 Setting up connection management for charger: ${chargerId}`);

    // Track charger connection status
    const chargerStatus = {
        id: chargerId,
        connected: true,
        lastHeartbeat: new Date(),
        lastBoot: null,
        connectors: new Map(), // Track connector statuses
        transactions: new Map(), // Track active transactions
        sessionId: client.sessionId
    };

    // Store charger status globally (in production, use database)
    global.chargerStatuses = global.chargerStatuses || new Map();
    global.chargerStatuses.set(chargerId, chargerStatus);

    // Register charger client for remote operations
    registerChargerClient(chargerId, client);

    console.log(`✅ Connection management setup complete for ${chargerId}`);

    // Return the charger status object for use in handlers
    return chargerStatus;
};

/**
 * Handle charger disconnection
 */
export const handleDisconnection = async (chargerId) => {
    try {
        console.log(`🔌 Handling disconnection for charger: ${chargerId}`);

        // Update charger status
        if (global.chargerStatuses && global.chargerStatuses.has(chargerId)) {
            const chargerStatus = global.chargerStatuses.get(chargerId);
            chargerStatus.connected = false;
            chargerStatus.disconnectedAt = new Date();

            // Update all connectors to offline
            for (const [connectorId, connector] of chargerStatus.connectors) {
                connector.status = "Unavailable";
                connector.lastStatusUpdate = new Date();
            }

            // Handle active transactions (in production, you'd save them to database)
            if (chargerStatus.transactions.size > 0) {
                console.log(`⚠️ Charger disconnected with ${chargerStatus.transactions.size} active transactions`);
                for (const [transactionId, transaction] of chargerStatus.transactions) {
                    console.log(`   Transaction ${transactionId}: ${transaction.status}`);
                }
            }

            console.log(`📊 Updated charger status after disconnection: ${chargerId}`);
        }

        // Unregister charger client for remote operations
        unregisterChargerClient(chargerId);

        logger.info("📊 Charger disconnected and status updated", {
            chargerId,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        logger.error("❌ Error handling disconnection", {
            chargerId,
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
};

/**
 * Update charger heartbeat
 */
export const updateChargerHeartbeat = (chargerId) => {
    try {
        if (global.chargerStatuses && global.chargerStatuses.has(chargerId)) {
            const chargerStatus = global.chargerStatuses.get(chargerId);
            chargerStatus.lastHeartbeat = new Date();

            console.log(`💓 Heartbeat updated for ${chargerId} at ${chargerStatus.lastHeartbeat.toISOString()}`);
        }
    } catch (error) {
        console.error(`❌ Error updating heartbeat for ${chargerId}:`, error.message);
    }
};

/**
 * Update connector status
 */
export const updateConnectorStatus = (chargerId, connectorId, status, errorCode = null) => {
    try {
        if (global.chargerStatuses && global.chargerStatuses.has(chargerId)) {
            const chargerStatus = global.chargerStatuses.get(chargerId);

            if (!chargerStatus.connectors.has(connectorId)) {
                chargerStatus.connectors.set(connectorId, {
                    id: connectorId,
                    status: status,
                    errorCode: errorCode,
                    lastStatusUpdate: new Date(),
                    createdAt: new Date()
                });
            } else {
                const connector = chargerStatus.connectors.get(connectorId);
                connector.status = status;
                connector.errorCode = errorCode;
                connector.lastStatusUpdate = new Date();
            }

            console.log(`📊 Connector ${connectorId} status updated to ${status} for ${chargerId}`);
        }
    } catch (error) {
        console.error(`❌ Error updating connector status for ${chargerId}:`, error.message);
    }
};

/**
 * Get charger status
 */
export const getChargerStatus = (chargerId) => {
    if (global.chargerStatuses && global.chargerStatuses.has(chargerId)) {
        return global.chargerStatuses.get(chargerId);
    }
    return null;
};

/**
 * Get all charger statuses
 */
export const getAllChargerStatuses = () => {
    if (global.chargerStatuses) {
        return Array.from(global.chargerStatuses.values());
    }
    return [];
};