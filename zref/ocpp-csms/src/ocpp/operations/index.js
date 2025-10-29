import { logger } from "../../utils/logger.js";

/**
 * Remote Operations Registry
 * Handles sending commands from CSMS to chargers
 */

// Store connected charger clients for remote operations
const chargerClients = new Map();

/**
 * Register a charger client for remote operations
 */
export const registerChargerClient = (chargerId, client) => {
    chargerClients.set(chargerId, client);
    console.log(`📡 Registered charger client for remote operations: ${chargerId}`);
};

/**
 * Unregister a charger client
 */
export const unregisterChargerClient = (chargerId) => {
    chargerClients.delete(chargerId);
    console.log(`📡 Unregistered charger client: ${chargerId}`);
};

/**
 * Execute RemoteStartTransaction
 */
export const executeRemoteStartTransaction = async (chargerId, connectorId, idTag) => {
    try {
        const client = chargerClients.get(chargerId);

        if (!client) {
            console.log(`❌ Cannot execute RemoteStartTransaction - charger ${chargerId} not connected`);
            throw new Error(`Charger ${chargerId} is not connected`);
        }

        console.log(`🚀 Executing RemoteStartTransaction for ${chargerId}:`, {
            connectorId,
            idTag
        });

        const response = await client.call("RemoteStartTransaction", {
            connectorId: parseInt(connectorId, 10),
            idTag: idTag
        });

        console.log(`✅ RemoteStartTransaction completed for ${chargerId}:`, response);
        return response;

    } catch (error) {
        console.error(`❌ Error executing RemoteStartTransaction for ${chargerId}:`, error.message);
        throw error;
    }
};

/**
 * Execute RemoteStopTransaction
 */
export const executeRemoteStopTransaction = async (chargerId, transactionId) => {
    try {
        const client = chargerClients.get(chargerId);

        if (!client) {
            console.log(`❌ Cannot execute RemoteStopTransaction - charger ${chargerId} not connected`);
            throw new Error(`Charger ${chargerId} is not connected`);
        }

        console.log(`🛑 Executing RemoteStopTransaction for ${chargerId}:`, {
            transactionId
        });

        const response = await client.call("RemoteStopTransaction", {
            transactionId: parseInt(transactionId, 10)
        });

        console.log(`✅ RemoteStopTransaction completed for ${chargerId}:`, response);
        return response;

    } catch (error) {
        console.error(`❌ Error executing RemoteStopTransaction for ${chargerId}:`, error.message);
        throw error;
    }
};

/**
 * Execute Reset
 */
export const executeReset = async (chargerId, type = "Soft") => {
    try {
        const client = chargerClients.get(chargerId);

        if (!client) {
            console.log(`❌ Cannot execute Reset - charger ${chargerId} not connected`);
            throw new Error(`Charger ${chargerId} is not connected`);
        }

        console.log(`🔄 Executing Reset for ${chargerId}:`, {
            type
        });

        const response = await client.call("Reset", {
            type: type
        });

        console.log(`✅ Reset completed for ${chargerId}:`, response);
        return response;

    } catch (error) {
        console.error(`❌ Error executing Reset for ${chargerId}:`, error.message);
        throw error;
    }
};

/**
 * Execute ChangeConfiguration
 */
export const executeChangeConfiguration = async (chargerId, key, value) => {
    try {
        const client = chargerClients.get(chargerId);

        if (!client) {
            console.log(`❌ Cannot execute ChangeConfiguration - charger ${chargerId} not connected`);
            throw new Error(`Charger ${chargerId} is not connected`);
        }

        console.log(`⚙️ Executing ChangeConfiguration for ${chargerId}:`, {
            key,
            value
        });

        const response = await client.call("ChangeConfiguration", {
            key: key,
            value: value
        });

        console.log(`✅ ChangeConfiguration completed for ${chargerId}:`, response);
        return response;

    } catch (error) {
        console.error(`❌ Error executing ChangeConfiguration for ${chargerId}:`, error.message);
        throw error;
    }
};

/**
 * Execute GetConfiguration
 */
export const executeGetConfiguration = async (chargerId, keys = []) => {
    try {
        const client = chargerClients.get(chargerId);

        if (!client) {
            console.log(`❌ Cannot execute GetConfiguration - charger ${chargerId} not connected`);
            throw new Error(`Charger ${chargerId} is not connected`);
        }

        console.log(`📋 Executing GetConfiguration for ${chargerId}:`, {
            keys
        });

        const response = await client.call("GetConfiguration", {
            key: keys
        });

        console.log(`✅ GetConfiguration completed for ${chargerId}:`, response);
        return response;

    } catch (error) {
        console.error(`❌ Error executing GetConfiguration for ${chargerId}:`, error.message);
        throw error;
    }
};

/**
 * Get list of connected chargers
 */
export const getConnectedChargers = () => {
    return Array.from(chargerClients.keys());
};

/**
 * Check if charger is connected
 */
export const isChargerConnected = (chargerId) => {
    return chargerClients.has(chargerId);
};