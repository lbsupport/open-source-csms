import { logger } from "../../utils/logger.js";
import { updateChargerHeartbeat, getChargerStatus } from "../middleware/connection.js";

/**
 * Connection Monitoring System
 * Monitors charger connections and heartbeat status
 */
export const startConnectionMonitoring = () => {
    console.log("🔍 Starting connection monitoring system...");

    // Check connections every 30 seconds
    setInterval(async () => {
        try {
            const now = new Date();
            const offlineThreshold = 5 * 60 * 1000; // 5 minutes in milliseconds

            console.log(`🔍 Checking charger connections at ${now.toISOString()}`);

            if (global.chargerStatuses) {
                for (const [chargerId, chargerStatus] of global.chargerStatuses) {
                    if (chargerStatus.connected) {
                        const timeDiff = now.getTime() - chargerStatus.lastHeartbeat.getTime();

                        if (timeDiff > offlineThreshold) {
                            console.log(`⚠️ Charger ${chargerId} appears offline - no recent heartbeat`);
                            console.log(`   Last heartbeat: ${chargerStatus.lastHeartbeat.toISOString()}`);
                            console.log(`   Time difference: ${Math.round(timeDiff / 1000)} seconds`);

                            // Mark charger as potentially offline
                            chargerStatus.connected = false;
                            chargerStatus.offlineSince = now;

                            logger.warn("⚠️ Charger appears offline - no recent heartbeat", {
                                chargerId,
                                lastHeartbeat: chargerStatus.lastHeartbeat.toISOString(),
                                timeDiffSeconds: Math.round(timeDiff / 1000),
                                thresholdSeconds: offlineThreshold / 1000
                            });
                        }
                    }
                }
            }

        } catch (error) {
            logger.error("❌ Error in connection monitoring", {
                error: error.message,
                timestamp: new Date().toISOString()
            });
        }
    }, 30000); // Check every 30 seconds

    console.log("✅ Connection monitoring started (checking every 30 seconds)");
};

/**
 * Get connection statistics
 */
export const getConnectionStats = () => {
    if (!global.chargerStatuses) {
        return {
            totalChargers: 0,
            connectedChargers: 0,
            offlineChargers: 0,
            chargers: []
        };
    }

    const chargers = Array.from(global.chargerStatuses.values());
    const connectedChargers = chargers.filter(c => c.connected).length;
    const offlineChargers = chargers.filter(c => !c.connected).length;

    return {
        totalChargers: chargers.length,
        connectedChargers,
        offlineChargers,
        chargers: chargers.map(charger => ({
            id: charger.id,
            connected: charger.connected,
            lastHeartbeat: charger.lastHeartbeat,
            lastBoot: charger.lastBoot,
            connectors: Array.from(charger.connectors.values()),
            sessionId: charger.sessionId
        }))
    };
};

/**
 * Print connection statistics
 */
export const printConnectionStats = () => {
    const stats = getConnectionStats();

    console.log("\n📊 Connection Statistics:");
    console.log(`   Total Chargers: ${stats.totalChargers}`);
    console.log(`   Connected: ${stats.connectedChargers}`);
    console.log(`   Offline: ${stats.offlineChargers}`);

    if (stats.chargers.length > 0) {
        console.log("\n🔌 Charger Details:");
        stats.chargers.forEach(charger => {
            console.log(`   ${charger.id}: ${charger.connected ? '🟢 Connected' : '🔴 Offline'}`);
            console.log(`     Last Heartbeat: ${charger.lastHeartbeat.toISOString()}`);
            console.log(`     Connectors: ${charger.connectors.length}`);
        });
    }

    console.log("");
};