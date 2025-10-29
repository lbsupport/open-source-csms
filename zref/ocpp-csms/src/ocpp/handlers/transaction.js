import { logger } from "../../utils/logger.js";
import { getChargerStatus, updateConnectorStatus } from "../middleware/connection.js";

/**
 * Handle StartTransaction from charger
 * Initiates a charging session
 */
export const handleStartTransaction = async (chargerId, params) => {
    try {
        const {
            connectorId,
            idTag,
            meterStart,
            timestamp,
            reservationId
        } = params;

        console.log(`🚀 Processing StartTransaction from ${chargerId}:`, {
            connectorId,
            idTag,
            meterStart,
            timestamp,
            reservationId
        });

        logger.info("🚀 Processing StartTransaction", {
            chargerId,
            connectorId,
            idTag,
            meterStart,
            timestamp,
            reservationId,
            timestamp: new Date().toISOString()
        });

        // Generate a unique transaction ID
        const transactionId = Math.floor(Math.random() * 100000) + 1;

        // Update connector status to Charging
        updateConnectorStatus(chargerId, connectorId, "Charging");

        // Store transaction information (in production, save to database)
        const transaction = {
            id: transactionId,
            chargerId,
            connectorId,
            idTag,
            meterStart,
            startTimestamp: timestamp ? new Date(timestamp) : new Date(),
            status: "Active"
        };

        // Store transaction in charger status
        const chargerStatus = getChargerStatus(chargerId);
        if (chargerStatus) {
            chargerStatus.transactions.set(transactionId, transaction);
        }

        console.log(`✅ StartTransaction processed successfully for ${chargerId}`);
        console.log(`   Transaction ID: ${transactionId}`);
        console.log(`   Connector: ${connectorId}`);
        console.log(`   User: ${idTag}`);

        // Return response to charger
        return {
            transactionId: transactionId,
            idTagInfo: {
                status: "Accepted"
            }
        };

    } catch (error) {
        logger.error("❌ Error processing StartTransaction", {
            chargerId,
            error: error.message,
            stack: error.stack,
            params,
            timestamp: new Date().toISOString()
        });

        console.log(`❌ Error processing StartTransaction for ${chargerId}:`, error.message);

        // Return error response
        return {
            transactionId: 0,
            idTagInfo: {
                status: "Invalid"
            }
        };
    }
};

/**
 * Handle StopTransaction from charger
 * Ends a charging session
 */
export const handleStopTransaction = async (chargerId, params) => {
    try {
        const {
            transactionId,
            timestamp,
            meterStop,
            reason,
            idTag
        } = params;

        console.log(`🛑 Processing StopTransaction from ${chargerId}:`, {
            transactionId,
            timestamp,
            meterStop,
            reason,
            idTag
        });

        logger.info("🛑 Processing StopTransaction", {
            chargerId,
            transactionId,
            timestamp,
            meterStop,
            reason,
            idTag,
            timestamp: new Date().toISOString()
        });

        // Get charger status and transaction
        const chargerStatus = getChargerStatus(chargerId);
        let transaction = null;
        let connectorId = null;

        if (chargerStatus && chargerStatus.transactions.has(transactionId)) {
            transaction = chargerStatus.transactions.get(transactionId);
            connectorId = transaction.connectorId;

            // Update transaction with stop information
            transaction.meterStop = meterStop;
            transaction.stopTimestamp = timestamp ? new Date(timestamp) : new Date();
            transaction.reason = reason;
            transaction.status = "Completed";

            // Remove from active transactions
            chargerStatus.transactions.delete(transactionId);

            // Update connector status back to Available
            updateConnectorStatus(chargerId, connectorId, "Available");
        }

        console.log(`✅ StopTransaction processed successfully for ${chargerId}`);
        console.log(`   Transaction ID: ${transactionId}`);
        console.log(`   Connector: ${connectorId}`);
        console.log(`   Reason: ${reason}`);
        console.log(`   Energy consumed: ${meterStop - (transaction?.meterStart || 0)} Wh`);

        // Return response to charger
        return {
            idTagInfo: {
                status: "Accepted"
            }
        };

    } catch (error) {
        logger.error("❌ Error processing StopTransaction", {
            chargerId,
            error: error.message,
            stack: error.stack,
            params,
            timestamp: new Date().toISOString()
        });

        console.log(`❌ Error processing StopTransaction for ${chargerId}:`, error.message);

        // Return error response
        return {
            idTagInfo: {
                status: "Invalid"
            }
        };
    }
};