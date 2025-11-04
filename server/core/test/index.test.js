import {
  createCharger,
  getAllChargers,
  getChargerById,
  updateCharger,
  deleteCharger,
} from "../module/chargers/charger.controller.js";

import {
  createConnector,
  getAllConnectors,
  getConnectorById,
  updateConnector,
  deleteConnector,
} from "../module/connectors/connector.controller.js";

import {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} from "../module/transactions/transaction.controller.js";

const testChargerData = {
  id: "TESTCHARGER001",
  vendor: "TestVendor",
  model: "TestModel",
  connected: true,
};

const testConnectorData = {
  chargerId: "TESTCHARGER001",
  connectorId: 1,
  status: "Available",
};

const testTransactionData = {
  chargerId: "TESTCHARGER001",
  connectorId: 1,
  idTag: "TEST001",
  meterStart: 0,
  startTimestamp: new Date(),
  status: "Active",
};

async function runTests() {
  try {
    console.log("🚀 Starting tests...\n");

    // Test Charger Operations
    console.log("📍 Testing Charger Operations:");
    const charger = await createCharger(testChargerData);
    console.log("Created Charger:", charger);

    const chargers = await getAllChargers({ limit: 5 });
    console.log("Listed Chargers:", chargers);

    const chargerById = await getChargerById(testChargerData.id);
    console.log("Found Charger:", chargerById);

    const updatedCharger = await updateCharger(testChargerData.id, {
      firmwareVersion: "1.0.0",
    });
    console.log("Updated Charger:", updatedCharger);

    // Test Connector Operations
    console.log("\n📍 Testing Connector Operations:");
    const connector = await createConnector(testConnectorData);
    console.log("Created Connector:", connector);

    const connectors = await getAllConnectors({ limit: 5 });
    console.log("Listed Connectors:", connectors);

    const connectorById = await getConnectorById(connector.id);
    console.log("Found Connector:", connectorById);

    const updatedConnector = await updateConnector(connector.id, {
      status: "Charging",
    });
    console.log("Updated Connector:", updatedConnector);

    // Test Transaction Operations
    console.log("\n📍 Testing Transaction Operations:");
    const transaction = await createTransaction(testTransactionData);
    console.log("Created Transaction:", transaction);

    const transactions = await getAllTransactions({ limit: 5 });
    console.log("Listed Transactions:", transactions);

    const transactionById = await getTransactionById(transaction.id);
    console.log("Found Transaction:", transactionById);

    const updatedTransaction = await updateTransaction(transaction.id, {
      meterStop: 100,
      stopTimestamp: new Date(),
      status: "Finished",
    });
    console.log("Updated Transaction:", updatedTransaction);

    // Cleanup (Delete in reverse order to maintain referential integrity)
    console.log("\n📍 Cleanup Operations:");
    await deleteTransaction(transaction.id);
    console.log("Deleted Transaction");

    await deleteConnector(connector.id);
    console.log("Deleted Connector");

    await deleteCharger(testChargerData.id);
    console.log("Deleted Charger");

    console.log("\n✅ All tests completed successfully!");
  } catch (error) {
    console.error("❌ Test failed:", error);
  }
}

runTests();
