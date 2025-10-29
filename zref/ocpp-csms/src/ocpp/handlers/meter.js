import { logger } from "../../utils/logger.js";
import { getChargerStatus } from "../middleware/connection.js";

/**
 * Handle MeterValues from charger
 * Energy consumption readings during charging
 */
export const handleMeterValues = async (chargerId, params) => {
    try {
        const {
            connectorId,
            transactionId,
            meterValue
        } = params;

        console.log(`🔢 Processing MeterValues from ${chargerId}:`, {
            connectorId,
            transactionId,
            meterValueCount: meterValue?.length || 0
        });

        logger.info("🔢 Processing MeterValues", {
            chargerId,
            connectorId,
            transactionId,
            meterValueCount: meterValue?.length || 0,
            timestamp: new Date().toISOString()
        });

        // Process meter values
        if (meterValue && meterValue.length > 0) {
            meterValue.forEach((meterReading, index) => {
                console.log(`   Meter Reading ${index + 1}:`, {
                    timestamp: meterReading.timestamp,
                    sampledValue: meterReading.sampledValue
                });

                // Process each sampled value
                if (meterReading.sampledValue) {
                    meterReading.sampledValue.forEach(sample => {
                        console.log(`     - ${sample.measurand}: ${sample.value} ${sample.unit}`);
                    });
                }
            });

            // Store meter values (in production, save to database)
            const chargerStatus = getChargerStatus(chargerId);
            if (chargerStatus && transactionId) {
                // Update transaction with latest meter values
                const transaction = chargerStatus.transactions.get(transactionId);
                if (transaction) {
                    transaction.lastMeterValues = meterValue;
                    transaction.lastMeterUpdate = new Date();
                }
            }
        }

        console.log(`✅ MeterValues processed successfully for ${chargerId}`);
        console.log(`   Connector: ${connectorId}`);
        console.log(`   Transaction: ${transactionId}`);
        console.log(`   Values: ${meterValue?.length || 0}`);

        // MeterValues doesn't require a response payload
        return {};

    } catch (error) {
        logger.error("❌ Error processing MeterValues", {
            chargerId,
            error: error.message,
            stack: error.stack,
            params,
            timestamp: new Date().toISOString()
        });

        console.log(`❌ Error processing MeterValues for ${chargerId}:`, error.message);

        // Return empty response even on error
        return {};
    }
};