import { logOcppMessage } from "../../utils/logger.js";

/**
 * OCPP Message Logging Middleware
 * This middleware logs all incoming and outgoing OCPP messages
 * so you can see exactly what's happening in your CSMS
 */
export const setupMessageLogging = (client, chargerId) => {
    console.log(`📋 Setting up message logging for charger: ${chargerId}`);

    // Log incoming requests from charger
    client.on("request", async (message) => {
        try {
            // ALWAYS log the raw message first
            console.log(`📨 RAW INCOMING MESSAGE from ${chargerId}:`, JSON.stringify(message, null, 2));

            // Try to parse the message
            let messageTypeId, messageId, action, payload;

            if (Array.isArray(message) && message.length >= 4) {
                [messageTypeId, messageId, action, payload] = message;

                // Extract transaction ID if present in payload
                const transactionId = extractTransactionId(payload);

                // Log the parsed message
                logOcppMessage("IN", chargerId, action, messageId, payload, transactionId);

                console.log(`📨 PARSED: ${action} from ${chargerId}:`, {
                    messageId,
                    payload: JSON.stringify(payload, null, 2),
                    transactionId
                });
            } else {
                console.log(`📨 UNPARSED MESSAGE from ${chargerId} (not in expected format)`);
            }

        } catch (error) {
            console.error(`❌ Error processing incoming message from ${chargerId}:`, error.message);
            console.log(`📨 RAW ERROR MESSAGE:`, message);
        }
    });

    // Log outgoing responses to charger
    client.on("response", async (message) => {
        try {
            // ALWAYS log the raw message first
            console.log(`📤 RAW OUTGOING MESSAGE to ${chargerId}:`, JSON.stringify(message, null, 2));

            // Handle different response formats
            if (message.outbound && message.payload) {
                // This is the format we're seeing: { outbound: true, payload: [...] }
                const [messageTypeId, messageId, action, payload] = message.payload;

                const transactionId = extractTransactionId(payload);

                // Log the parsed message
                logOcppMessage("OUT", chargerId, action, messageId, payload, transactionId);

                console.log(`📤 PARSED: ${action} to ${chargerId}:`, {
                    messageId,
                    payload: JSON.stringify(payload, null, 2),
                    transactionId
                });
            } else if (Array.isArray(message) && message.length >= 4) {
                // Standard OCPP format
                const [messageTypeId, messageId, action, payload] = message;

                const transactionId = extractTransactionId(payload);

                // Log the parsed message
                logOcppMessage("OUT", chargerId, action, messageId, payload, transactionId);

                console.log(`📤 PARSED: ${action} to ${chargerId}:`, {
                    messageId,
                    payload: JSON.stringify(payload, null, 2),
                    transactionId
                });
            } else {
                console.log(`📤 UNPARSED MESSAGE to ${chargerId} (not in expected format)`);
            }

        } catch (error) {
            console.error(`❌ Error processing outgoing message to ${chargerId}:`, error.message);
            console.log(`📤 RAW ERROR MESSAGE:`, message);
        }
    });
};

/**
 * Extract transaction ID from OCPP message payload
 * Transaction ID can be in different places depending on the message type
 */
const extractTransactionId = (payload) => {
    if (!payload || typeof payload !== 'object') return null;

    // Check for transactionId in various locations
    if (payload.transactionId) return payload.transactionId;
    if (payload.transaction_id) return payload.transaction_id;

    // Recursively search nested objects for transaction ID
    const searchTransactionId = (obj) => {
        if (typeof obj !== 'object' || obj === null) return null;

        for (const [key, value] of Object.entries(obj)) {
            if (key.toLowerCase().includes('transaction') && typeof value === 'number') {
                return value;
            }
            if (typeof value === 'object') {
                const found = searchTransactionId(value);
                if (found !== null) return found;
            }
        }
        return null;
    };

    return searchTransactionId(payload);
};