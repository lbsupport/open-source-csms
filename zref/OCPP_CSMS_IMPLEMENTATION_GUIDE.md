# 🚀 OCPP CSMS Implementation Guide

## 📋 Overview
This guide provides a complete, modular implementation of an OCPP 1.6 CSMS (Charging Station Management System) using `ocpp-rpc`, Prisma ORM, and Express.js. The implementation includes comprehensive logging to help you understand the OCPP flow practically.

## 🏗️ Project Structure
```
ocpp-csms/
├── src/
│   ├── ocpp/
│   │   ├── server.js              # Main OCPP server
│   │   ├── handlers/              # Message handlers
│   │   │   ├── index.js           # Handler registry
│   │   │   ├── boot.js            # BootNotification handler
│   │   │   ├── heartbeat.js       # Heartbeat handler
│   │   │   ├── status.js          # StatusNotification handler
│   │   │   ├── authorize.js       # Authorize handler
│   │   │   ├── transaction.js     # Start/Stop transaction handlers
│   │   │   └── meter.js           # MeterValues handler
│   │   ├── operations/            # Remote operations
│   │   │   ├── index.js           # Operations registry
│   │   │   ├── remoteStart.js     # RemoteStartTransaction
│   │   │   ├── remoteStop.js      # RemoteStopTransaction
│   │   │   ├── reset.js           # Reset operation
│   │   │   └── config.js          # Configuration operations
│   │   ├── middleware/            # OCPP middleware
│   │   │   ├── auth.js            # Authentication middleware
│   │   │   ├── logger.js          # Message logging middleware
│   │   │   └── connection.js      # Connection management
│   │   └── utils/                 # Utilities
│   │       ├── constants.js       # OCPP constants
│   │       └── helpers.js         # Helper functions
│   ├── database/
│   │   ├── prisma/
│   │   │   └── schema.prisma      # Database schema
│   │   ├── migrations/            # Database migrations
│   │   └── seed.js                # Database seeding
│   ├── api/
│   │   ├── routes/
│   │   │   ├── chargers.js        # Charger management routes
│   │   │   ├── transactions.js    # Transaction routes
│   │   │   └── operations.js      # OCPP operations routes
│   │   └── middleware/
│   │       ├── auth.js            # API authentication
│   │       └── validation.js      # Request validation
│   ├── services/
│   │   ├── chargerService.js      # Charger business logic
│   │   ├── transactionService.js  # Transaction business logic
│   │   └── ocppService.js        # OCPP operations service
│   ├── utils/
│   │   ├── logger.js              # Application logging
│   │   └── config.js              # Configuration management
│   └── server.js                  # Main server entry point
├── package.json
├── .env.example
└── README.md
```

## 📦 Dependencies

### package.json
```json
{
  "name": "ocpp-csms",
  "version": "1.0.0",
  "description": "OCPP 1.6 CSMS Implementation",
  "main": "src/server.js",
  "type": "module",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:seed": "node src/database/seed.js"
  },
  "dependencies": {
    "ocpp-rpc": "^2.2.0",
    "express": "^4.18.2",
    "prisma": "^5.7.0",
    "@prisma/client": "^5.7.0",
    "ws": "^8.14.2",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "morgan": "^1.10.0",
    "dotenv": "^16.3.1",
    "winston": "^3.11.0",
    "joi": "^17.11.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

## 🗄️ Database Schema (Prisma)

### src/database/prisma/schema.prisma
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // or "sqlite", "mysql"
  url      = env("DATABASE_URL")
}

model Charger {
  id                String   @id @default(cuid())
  chargerId         String   @unique @map("charger_id")
  name              String   @unique
  model             String?
  vendor            String?
  firmwareVersion   String?  @map("firmware_version")
  serialNumber      String?  @map("serial_number")
  status            ChargerStatus @default(OFFLINE)
  lastHeartbeat     DateTime? @map("last_heartbeat")
  lastBoot          DateTime? @map("last_boot")
  createdAt         DateTime @default(now()) @map("created_at")
  updatedAt         DateTime @updatedAt @map("updated_at")

  // Relations
  connectors        Connector[]
  transactions      Transaction[]
  ocppLogs          OcppLog[]
  configurations    ChargerConfiguration[]

  @@map("chargers")
}

model Connector {
  id                String   @id @default(cuid())
  chargerId         String   @map("charger_id")
  connectorId       Int      @map("connector_id")
  status            ConnectorStatus @default(AVAILABLE)
  errorCode         String?  @map("error_code")
  lastStatusUpdate  DateTime? @map("last_status_update")
  createdAt         DateTime @default(now()) @map("created_at")
  updatedAt         DateTime @updatedAt @map("updated_at")

  // Relations
  charger           Charger  @relation(fields: [chargerId], references: [chargerId], onDelete: Cascade)
  transactions      Transaction[]

  @@unique([chargerId, connectorId])
  @@map("connectors")
}

model Transaction {
  id                String   @id @default(cuid())
  transactionId     Int?     @unique @map("transaction_id")
  chargerId         String   @map("charger_id")
  connectorId       Int      @map("connector_id")
  idTag             String?  @map("id_tag")
  meterStart        Int?     @map("meter_start")
  meterStop         Int?     @map("meter_stop")
  startTimestamp    DateTime? @map("start_timestamp")
  stopTimestamp     DateTime? @map("stop_timestamp")
  status            TransactionStatus @default(ACTIVE)
  reason            String?
  createdAt         DateTime @default(now()) @map("created_at")
  updatedAt         DateTime @updatedAt @map("updated_at")

  // Relations
  charger           Charger  @relation(fields: [chargerId], references: [chargerId], onDelete: Cascade)
  connector         Connector @relation(fields: [chargerId, connectorId], references: [chargerId, connectorId])
  meterValues       MeterValue[]

  @@map("transactions")
}

model MeterValue {
  id                String   @id @default(cuid())
  transactionId     Int?     @map("transaction_id")
  chargerId         String   @map("charger_id")
  connectorId       Int      @map("connector_id")
  timestamp         DateTime
  value             Float
  unit              String
  measurand         String
  phase             String?
  location          String?
  createdAt         DateTime @default(now()) @map("created_at")

  // Relations
  transaction       Transaction? @relation(fields: [transactionId], references: [transactionId])

  @@map("meter_values")
}

model OcppLog {
  id                String   @id @default(cuid())
  chargerId         String   @map("charger_id")
  direction         LogDirection
  message           String
  transactionId     Int?     @map("transaction_id")
  timestamp         DateTime @default(now())

  // Relations
  charger           Charger  @relation(fields: [chargerId], references: [chargerId], onDelete: Cascade)

  @@map("ocpp_logs")
}

model ChargerConfiguration {
  id                String   @id @default(cuid())
  chargerId         String   @map("charger_id")
  key               String
  value             String
  readonly          Boolean  @default(false)
  createdAt         DateTime @default(now()) @map("created_at")
  updatedAt         DateTime @updatedAt @map("updated_at")

  // Relations
  charger           Charger  @relation(fields: [chargerId], references: [chargerId], onDelete: Cascade)

  @@unique([chargerId, key])
  @@map("charger_configurations")
}

// Enums
enum ChargerStatus {
  ONLINE
  OFFLINE
  FAULTED
  UNAVAILABLE
}

enum ConnectorStatus {
  AVAILABLE
  PREPARING
  CHARGING
  SUSPENDED_EVSE
  SUSPENDED_EV
  FINISHING
  RESERVED
  UNAVAILABLE
  FAULTED
}

enum TransactionStatus {
  ACTIVE
  COMPLETED
  CANCELLED
}

enum LogDirection {
  IN
  OUT
}
```

## 🔧 Core Implementation

### 1. Main OCPP Server (src/ocpp/server.js)
```javascript
import { RPCServer, createRPCError } from "ocpp-rpc";
import { logger } from "../utils/logger.js";
import { authMiddleware } from "./middleware/auth.js";
import { loggerMiddleware } from "./middleware/logger.js";
import { connectionMiddleware } from "./middleware/connection.js";
import { registerHandlers } from "./handlers/index.js";
import { chargerClients } from "./utils/helpers.js";

/**
 * OCPP Server Configuration
 */
const OCPP_CONFIG = {
  port: process.env.OCPP_PORT || 9220,
  protocols: ["ocpp1.6"],
  strictMode: true,
  heartbeatInterval: 300, // 5 minutes
  offlineThreshold: 600,  // 10 minutes
};

/**
 * Initialize and start the OCPP server
 */
export const startOcppServer = async () => {
  try {
    logger.info("🚀 Initializing OCPP Server...", {
      port: OCPP_CONFIG.port,
      protocols: OCPP_CONFIG.protocols,
      strictMode: OCPP_CONFIG.strictMode
    });

    // Create RPC Server instance
    const server = new RPCServer({
      protocols: OCPP_CONFIG.protocols,
      strictMode: OCPP_CONFIG.strictMode,
    });

    // Setup authentication middleware
    server.auth(authMiddleware);

    // Handle client connections
    server.on("client", async (client) => {
      const chargerId = client.identity;
      
      logger.info("🔌 New charger connection established", {
        chargerId,
        sessionId: client.sessionId,
        timestamp: new Date().toISOString()
      });

      // Store client reference for remote operations
      chargerClients.set(chargerId, client);

      // Apply middleware
      await connectionMiddleware(client, chargerId);
      loggerMiddleware(client, chargerId);

      // Register OCPP message handlers
      registerHandlers(client, chargerId);

      // Handle client disconnection
      client.on("close", async () => {
        logger.warn("🔌 Charger disconnected", {
          chargerId,
          timestamp: new Date().toISOString()
        });

        await handleDisconnection(chargerId);
        chargerClients.delete(chargerId);
      });

      // Handle client errors
      client.on("error", (error) => {
        logger.error("❌ Charger connection error", {
          chargerId,
          error: error.message,
          stack: error.stack,
          timestamp: new Date().toISOString()
        });
      });
    });

    // Start server
    await server.listen(OCPP_CONFIG.port);
    
    logger.info("✅ OCPP Server started successfully", {
      port: OCPP_CONFIG.port,
      protocols: OCPP_CONFIG.protocols,
      timestamp: new Date().toISOString()
    });

    // Start connection monitoring
    startConnectionMonitoring();

    return server;
  } catch (error) {
    logger.error("❌ Failed to start OCPP server", {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    throw error;
  }
};

/**
 * Handle charger disconnection
 */
const handleDisconnection = async (chargerId) => {
  try {
    // Update charger status to offline
    const { updateChargerStatus } = await import("../services/chargerService.js");
    await updateChargerStatus(chargerId, "OFFLINE");

    // Update all connectors to offline
    const { updateConnectorStatus } = await import("../services/chargerService.js");
    await updateConnectorStatus(chargerId, null, "UNAVAILABLE");

    logger.info("📊 Updated charger status after disconnection", {
      chargerId,
      status: "OFFLINE",
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
 * Monitor charger connections and heartbeat
 */
const startConnectionMonitoring = () => {
  setInterval(async () => {
    try {
      const now = new Date();
      const offlineThreshold = OCPP_CONFIG.offlineThreshold * 1000; // Convert to milliseconds

      logger.debug("🔍 Checking charger connections", {
        connectedChargers: chargerClients.size,
        timestamp: now.toISOString()
      });

      for (const [chargerId, client] of chargerClients) {
        const { getChargerLastHeartbeat } = await import("../services/chargerService.js");
        const lastHeartbeat = await getChargerLastHeartbeat(chargerId);

        if (lastHeartbeat) {
          const timeDiff = now.getTime() - lastHeartbeat.getTime();
          
          if (timeDiff > offlineThreshold) {
            logger.warn("⚠️ Charger appears offline - no recent heartbeat", {
              chargerId,
              lastHeartbeat: lastHeartbeat.toISOString(),
              timeDiffSeconds: Math.round(timeDiff / 1000),
              thresholdSeconds: OCPP_CONFIG.offlineThreshold
            });

            // Mark charger as offline
            const { updateChargerStatus } = await import("../services/chargerService.js");
            await updateChargerStatus(chargerId, "OFFLINE");
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

  logger.info("🔍 Connection monitoring started", {
    intervalSeconds: 30,
    offlineThresholdSeconds: OCPP_CONFIG.offlineThreshold
  });
};
```

### 2. Authentication Middleware (src/ocpp/middleware/auth.js)
```javascript
import { logger } from "../../utils/logger.js";
import { getChargerById } from "../../services/chargerService.js";

/**
 * OCPP Authentication Middleware
 * Validates charger credentials during connection
 */
export const authMiddleware = async (accept, reject, handshake) => {
  try {
    const chargerId = handshake.identity;
    
    logger.info("🔐 Starting charger authentication", {
      chargerId,
      timestamp: new Date().toISOString()
    });

    // Validate charger exists in database
    const charger = await getChargerById(chargerId);
    
    if (!charger) {
      logger.warn("❌ Authentication failed - charger not found", {
        chargerId,
        timestamp: new Date().toISOString()
      });
      reject();
      return;
    }

    // Check if charger is enabled
    if (charger.status === "OFFLINE" || charger.status === "FAULTED") {
      logger.warn("❌ Authentication failed - charger not available", {
        chargerId,
        status: charger.status,
        timestamp: new Date().toISOString()
      });
      reject();
      return;
    }

    logger.info("✅ Authentication successful", {
      chargerId,
      chargerName: charger.name,
      model: charger.model,
      vendor: charger.vendor,
      timestamp: new Date().toISOString()
    });

    // Accept connection with session info
    accept({
      sessionId: chargerId,
      chargerInfo: {
        id: charger.id,
        name: charger.name,
        model: charger.model,
        vendor: charger.vendor
      }
    });

  } catch (error) {
    logger.error("❌ Authentication error", {
      chargerId: handshake.identity,
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    reject();
  }
};
```

### 3. Logger Middleware (src/ocpp/middleware/logger.js)
```javascript
import { logger } from "../../utils/logger.js";
import { createOcppLog } from "../../services/ocppService.js";

/**
 * OCPP Message Logging Middleware
 * Logs all incoming and outgoing OCPP messages
 */
export const loggerMiddleware = (client, chargerId) => {
  // Log incoming requests from charger
  client.on("request", async (message) => {
    try {
      logger.info("📨 OCPP Message Received", {
        chargerId,
        direction: "IN",
        messageType: message[2], // OCPP message type
        messageId: message[1],    // OCPP message ID
        payload: message[3],       // OCPP payload
        timestamp: new Date().toISOString()
      });

      // Store in database
      await createOcppLog({
        chargerId,
        direction: "IN",
        message: JSON.stringify(message),
        transactionId: extractTransactionId(message[3])
      });

    } catch (error) {
      logger.error("❌ Error logging incoming message", {
        chargerId,
        error: error.message,
        message: JSON.stringify(message),
        timestamp: new Date().toISOString()
      });
    }
  });

  // Log outgoing responses to charger
  client.on("response", async (message) => {
    try {
      logger.info("📤 OCPP Message Sent", {
        chargerId,
        direction: "OUT",
        messageType: message[2], // OCPP message type
        messageId: message[1],    // OCPP message ID
        payload: message[3],       // OCPP payload
        timestamp: new Date().toISOString()
      });

      // Store in database
      await createOcppLog({
        chargerId,
        direction: "OUT",
        message: JSON.stringify(message),
        transactionId: extractTransactionId(message[3])
      });

    } catch (error) {
      logger.error("❌ Error logging outgoing message", {
        chargerId,
        error: error.message,
        message: JSON.stringify(message),
        timestamp: new Date().toISOString()
      });
    }
  });
};

/**
 * Extract transaction ID from OCPP message payload
 */
const extractTransactionId = (payload) => {
  if (!payload || typeof payload !== 'object') return null;
  
  // Check for transactionId in various locations
  if (payload.transactionId) return payload.transactionId;
  if (payload.transaction_id) return payload.transaction_id;
  
  // Recursively search nested objects
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
```

### 4. Connection Middleware (src/ocpp/middleware/connection.js)
```javascript
import { logger } from "../../utils/logger.js";
import { updateChargerStatus, updateChargerHeartbeat } from "../../services/chargerService.js";

/**
 * OCPP Connection Management Middleware
 * Handles connection lifecycle events
 */
export const connectionMiddleware = async (client, chargerId) => {
  try {
    logger.info("🔗 Setting up connection middleware", {
      chargerId,
      timestamp: new Date().toISOString()
    });

    // Update charger status to online
    await updateChargerStatus(chargerId, "ONLINE");
    
    // Update heartbeat timestamp
    await updateChargerHeartbeat(chargerId);

    logger.info("✅ Connection middleware setup complete", {
      chargerId,
      status: "ONLINE",
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error("❌ Error setting up connection middleware", {
      chargerId,
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
  }
};
```

### 5. Message Handlers (src/ocpp/handlers/index.js)
```javascript
import { logger } from "../../utils/logger.js";
import { createRPCError } from "ocpp-rpc";

// Import individual handlers
import { handleBootNotification } from "./boot.js";
import { handleHeartbeat } from "./heartbeat.js";
import { handleStatusNotification } from "./status.js";
import { handleAuthorize } from "./authorize.js";
import { handleStartTransaction, handleStopTransaction } from "./transaction.js";
import { handleMeterValues } from "./meter.js";

/**
 * Register all OCPP message handlers for a client
 */
export const registerHandlers = (client, chargerId) => {
  logger.info("📋 Registering OCPP message handlers", {
    chargerId,
    timestamp: new Date().toISOString()
  });

  // BootNotification - Charger startup
  client.handle("BootNotification", async (params) => {
    logger.info("🚀 BootNotification received", {
      chargerId,
      params,
      timestamp: new Date().toISOString()
    });
    return await handleBootNotification(chargerId, params);
  });

  // Heartbeat - Keep-alive
  client.handle("Heartbeat", async () => {
    logger.debug("💓 Heartbeat received", {
      chargerId,
      timestamp: new Date().toISOString()
    });
    return await handleHeartbeat(chargerId);
  });

  // StatusNotification - Connector status updates
  client.handle("StatusNotification", async (params) => {
    logger.info("📊 StatusNotification received", {
      chargerId,
      params,
      timestamp: new Date().toISOString()
    });
    return await handleStatusNotification(chargerId, params);
  });

  // Authorize - User authorization
  client.handle("Authorize", async (params) => {
    logger.info("🔑 Authorize received", {
      chargerId,
      params,
      timestamp: new Date().toISOString()
    });
    return await handleAuthorize(chargerId, params);
  });

  // StartTransaction - Transaction start
  client.handle("StartTransaction", async (params) => {
    logger.info("🚀 StartTransaction received", {
      chargerId,
      params,
      timestamp: new Date().toISOString()
    });
    return await handleStartTransaction(chargerId, params);
  });

  // StopTransaction - Transaction stop
  client.handle("StopTransaction", async (params) => {
    logger.info("🛑 StopTransaction received", {
      chargerId,
      params,
      timestamp: new Date().toISOString()
    });
    return await handleStopTransaction(chargerId, params);
  });

  // MeterValues - Energy meter readings
  client.handle("MeterValues", async (params) => {
    logger.info("🔢 MeterValues received", {
      chargerId,
      params,
      timestamp: new Date().toISOString()
    });
    return await handleMeterValues(chargerId, params);
  });

  // DataTransfer - Custom data transfer
  client.handle("DataTransfer", async (params) => {
    logger.info("📦 DataTransfer received", {
      chargerId,
      params,
      timestamp: new Date().toISOString()
    });
    return { status: "Accepted" };
  });

  // DiagnosticsStatusNotification - Diagnostics status
  client.handle("DiagnosticsStatusNotification", async (params) => {
    logger.info("🩺 DiagnosticsStatusNotification received", {
      chargerId,
      params,
      timestamp: new Date().toISOString()
    });
    return {};
  });

  // FirmwareStatusNotification - Firmware update status
  client.handle("FirmwareStatusNotification", async (params) => {
    logger.info("💾 FirmwareStatusNotification received", {
      chargerId,
      params,
      timestamp: new Date().toISOString()
    });
    return {};
  });

  // ReserveNow - Connector reservation
  client.handle("ReserveNow", async (params) => {
    logger.info("📅 ReserveNow received", {
      chargerId,
      params,
      timestamp: new Date().toISOString()
    });
    return { status: "Accepted" };
  });

  // CancelReservation - Cancel reservation
  client.handle("CancelReservation", async (params) => {
    logger.info("❌ CancelReservation received", {
      chargerId,
      params,
      timestamp: new Date().toISOString()
    });
    return { status: "Accepted" };
  });

  // UnlockConnector - Unlock connector
  client.handle("UnlockConnector", async (params) => {
    logger.info("🔓 UnlockConnector received", {
      chargerId,
      params,
      timestamp: new Date().toISOString()
    });
    return { status: "Unlocked" };
  });

  // Catch-all handler for unimplemented methods
  client.handle(({ method, params }) => {
    logger.warn("⚠️ Unhandled OCPP method received", {
      chargerId,
      method,
      params,
      timestamp: new Date().toISOString()
    });
    
    throw createRPCError("NotImplemented", `Method ${method} not implemented`);
  });

  logger.info("✅ All OCPP message handlers registered", {
    chargerId,
    timestamp: new Date().toISOString()
  });
};
```

### 6. BootNotification Handler (src/ocpp/handlers/boot.js)
```javascript
import { logger } from "../../utils/logger.js";
import { updateChargerInfo } from "../../services/chargerService.js";

/**
 * Handle BootNotification from charger
 * This is the first message sent by charger when connecting
 */
export const handleBootNotification = async (chargerId, params) => {
  try {
    const {
      chargePointModel,
      chargePointVendor,
      firmwareVersion,
      chargePointSerialNumber,
      chargeBoxSerialNumber
    } = params;

    logger.info("🚀 Processing BootNotification", {
      chargerId,
      chargePointModel,
      chargePointVendor,
      firmwareVersion,
      chargePointSerialNumber,
      chargeBoxSerialNumber,
      timestamp: new Date().toISOString()
    });

    // Update charger information in database
    await updateChargerInfo(chargerId, {
      model: chargePointModel,
      vendor: chargePointVendor,
      firmwareVersion: firmwareVersion,
      serialNumber: chargePointSerialNumber || chargeBoxSerialNumber,
      lastBoot: new Date(),
      status: "ONLINE"
    });

    logger.info("✅ BootNotification processed successfully", {
      chargerId,
      timestamp: new Date().toISOString()
    });

    // Return response to charger
    return {
      status: "Accepted",
      currentTime: new Date().toISOString(),
      interval: 300 // Heartbeat interval in seconds (5 minutes)
    };

  } catch (error) {
    logger.error("❌ Error processing BootNotification", {
      chargerId,
      error: error.message,
      stack: error.stack,
      params,
      timestamp: new Date().toISOString()
    });

    // Return error response
    return {
      status: "Rejected",
      currentTime: new Date().toISOString(),
      interval: 300
    };
  }
};
```

### 7. Heartbeat Handler (src/ocpp/handlers/heartbeat.js)
```javascript
import { logger } from "../../utils/logger.js";
import { updateChargerHeartbeat } from "../../services/chargerService.js";

/**
 * Handle Heartbeat from charger
 * Keep-alive message sent periodically by charger
 */
export const handleHeartbeat = async (chargerId) => {
  try {
    logger.debug("💓 Processing Heartbeat", {
      chargerId,
      timestamp: new Date().toISOString()
    });

    // Update last heartbeat timestamp
    await updateChargerHeartbeat(chargerId);

    logger.debug("✅ Heartbeat processed successfully", {
      chargerId,
      timestamp: new Date().toISOString()
    });

    // Return current server time
    return {
      currentTime: new Date().toISOString()
    };

  } catch (error) {
    logger.error("❌ Error processing Heartbeat", {
      chargerId,
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });

    // Return current time even on error
    return {
      currentTime: new Date().toISOString()
    };
  }
};
```

### 8. StatusNotification Handler (src/ocpp/handlers/status.js)
```javascript
import { logger } from "../../utils/logger.js";
import { updateConnectorStatus } from "../../services/chargerService.js";

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

    logger.info("📊 Processing StatusNotification", {
      chargerId,
      connectorId,
      status,
      errorCode,
      timestamp,
      info,
      timestamp: new Date().toISOString()
    });

    // Update connector status in database
    await updateConnectorStatus(chargerId, connectorId, {
      status: status,
      errorCode: errorCode,
      lastStatusUpdate: timestamp ? new Date(timestamp) : new Date()
    });

    logger.info("✅ StatusNotification processed successfully", {
      chargerId,
      connectorId,
      status,
      timestamp: new Date().toISOString()
    });

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

    // Return empty response even on error
    return {};
  }
};
```

### 9. Transaction Handlers (src/ocpp/handlers/transaction.js)
```javascript
import { logger } from "../../utils/logger.js";
import { createTransaction, completeTransaction } from "../../services/transactionService.js";

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

    logger.info("🚀 Processing StartTransaction", {
      chargerId,
      connectorId,
      idTag,
      meterStart,
      timestamp,
      reservationId,
      timestamp: new Date().toISOString()
    });

    // Create transaction record
    const transaction = await createTransaction({
      chargerId,
      connectorId,
      idTag,
      meterStart,
      startTimestamp: timestamp ? new Date(timestamp) : new Date(),
      status: "ACTIVE"
    });

    logger.info("✅ StartTransaction processed successfully", {
      chargerId,
      connectorId,
      transactionId: transaction.transactionId,
      idTag,
      timestamp: new Date().toISOString()
    });

    // Return response to charger
    return {
      transactionId: transaction.transactionId,
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

    logger.info("🛑 Processing StopTransaction", {
      chargerId,
      transactionId,
      meterStop,
      reason,
      idTag,
      timestamp,
      timestamp: new Date().toISOString()
    });

    // Complete transaction record
    await completeTransaction(transactionId, {
      meterStop,
      stopTimestamp: timestamp ? new Date(timestamp) : new Date(),
      reason,
      status: "COMPLETED"
    });

    logger.info("✅ StopTransaction processed successfully", {
      chargerId,
      transactionId,
      meterStop,
      reason,
      timestamp: new Date().toISOString()
    });

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

    // Return error response
    return {
      idTagInfo: {
        status: "Invalid"
      }
    };
  }
};
```

### 10. MeterValues Handler (src/ocpp/handlers/meter.js)
```javascript
import { logger } from "../../utils/logger.js";
import { storeMeterValues } from "../../services/transactionService.js";

/**
 * Handle MeterValues from charger
 * Energy consumption readings
 */
export const handleMeterValues = async (chargerId, params) => {
  try {
    const {
      connectorId,
      transactionId,
      meterValue
    } = params;

    logger.info("🔢 Processing MeterValues", {
      chargerId,
      connectorId,
      transactionId,
      meterValueCount: meterValue?.length || 0,
      timestamp: new Date().toISOString()
    });

    // Store meter values in database
    if (meterValue && meterValue.length > 0) {
      await storeMeterValues({
        chargerId,
        connectorId,
        transactionId,
        meterValues: meterValue
      });

      logger.info("✅ MeterValues processed successfully", {
        chargerId,
        connectorId,
        transactionId,
        valuesStored: meterValue.length,
        timestamp: new Date().toISOString()
      });
    }

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

    // Return empty response even on error
    return {};
  }
};
```

### 11. Remote Operations (src/ocpp/operations/index.js)
```javascript
import { logger } from "../../utils/logger.js";
import { chargerClients } from "../utils/helpers.js";

// Import individual operations
import { remoteStartTransaction } from "./remoteStart.js";
import { remoteStopTransaction } from "./remoteStop.js";
import { resetCharger } from "./reset.js";
import { changeConfiguration, getConfiguration } from "./config.js";

/**
 * Execute remote start transaction
 */
export const executeRemoteStartTransaction = async (chargerId, connectorId, idTag) => {
  const client = chargerClients.get(chargerId);
  
  if (!client) {
    logger.error("❌ Cannot execute RemoteStartTransaction - charger not connected", {
      chargerId,
      connectorId,
      idTag,
      timestamp: new Date().toISOString()
    });
    throw new Error(`Charger ${chargerId} is not connected`);
  }

  return await remoteStartTransaction(client, chargerId, connectorId, idTag);
};

/**
 * Execute remote stop transaction
 */
export const executeRemoteStopTransaction = async (chargerId, transactionId) => {
  const client = chargerClients.get(chargerId);
  
  if (!client) {
    logger.error("❌ Cannot execute RemoteStopTransaction - charger not connected", {
      chargerId,
      transactionId,
      timestamp: new Date().toISOString()
    });
    throw new Error(`Charger ${chargerId} is not connected`);
  }

  return await remoteStopTransaction(client, chargerId, transactionId);
};

/**
 * Execute charger reset
 */
export const executeReset = async (chargerId, type = "Soft") => {
  const client = chargerClients.get(chargerId);
  
  if (!client) {
    logger.error("❌ Cannot execute Reset - charger not connected", {
      chargerId,
      type,
      timestamp: new Date().toISOString()
    });
    throw new Error(`Charger ${chargerId} is not connected`);
  }

  return await resetCharger(client, chargerId, type);
};

/**
 * Execute configuration change
 */
export const executeChangeConfiguration = async (chargerId, key, value) => {
  const client = chargerClients.get(chargerId);
  
  if (!client) {
    logger.error("❌ Cannot execute ChangeConfiguration - charger not connected", {
      chargerId,
      key,
      value,
      timestamp: new Date().toISOString()
    });
    throw new Error(`Charger ${chargerId} is not connected`);
  }

  return await changeConfiguration(client, chargerId, key, value);
};

/**
 * Execute get configuration
 */
export const executeGetConfiguration = async (chargerId, keys = []) => {
  const client = chargerClients.get(chargerId);
  
  if (!client) {
    logger.error("❌ Cannot execute GetConfiguration - charger not connected", {
      chargerId,
      keys,
      timestamp: new Date().toISOString()
    });
    throw new Error(`Charger ${chargerId} is not connected`);
  }

  return await getConfiguration(client, chargerId, keys);
};
```

### 12. Remote Start Transaction (src/ocpp/operations/remoteStart.js)
```javascript
import { logger } from "../../utils/logger.js";

/**
 * Execute RemoteStartTransaction operation
 */
export const remoteStartTransaction = async (client, chargerId, connectorId, idTag) => {
  try {
    logger.info("🚀 Executing RemoteStartTransaction", {
      chargerId,
      connectorId,
      idTag,
      timestamp: new Date().toISOString()
    });

    const response = await client.call("RemoteStartTransaction", {
      connectorId: parseInt(connectorId, 10),
      idTag: idTag
    });

    logger.info("✅ RemoteStartTransaction completed", {
      chargerId,
      connectorId,
      idTag,
      response,
      timestamp: new Date().toISOString()
    });

    return response;

  } catch (error) {
    logger.error("❌ Error executing RemoteStartTransaction", {
      chargerId,
      connectorId,
      idTag,
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    throw error;
  }
};
```

### 13. HTTP API Server (src/server.js)
```javascript
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import { logger } from "./utils/logger.js";
import { startOcppServer } from "./ocpp/server.js";

// Import API routes
import chargerRoutes from "./api/routes/chargers.js";
import transactionRoutes from "./api/routes/transactions.js";
import operationRoutes from "./api/routes/operations.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/chargers", chargerRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/operations", operationRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Start servers
const startServers = async () => {
  try {
    // Start OCPP server
    await startOcppServer();

    // Start HTTP server
    app.listen(PORT, () => {
      logger.info("🌐 HTTP Server started", {
        port: PORT,
        timestamp: new Date().toISOString()
      });
    });

  } catch (error) {
    logger.error("❌ Failed to start servers", {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    process.exit(1);
  }
};

// Start the application
startServers();

export default app;
```

### 14. Charger API Routes (src/api/routes/chargers.js)
```javascript
import express from "express";
import { logger } from "../../utils/logger.js";
import { 
  getAllChargers, 
  getChargerById, 
  createCharger, 
  updateCharger,
  deleteCharger 
} from "../../services/chargerService.js";

const router = express.Router();

/**
 * GET /api/chargers
 * Get all chargers
 */
router.get("/", async (req, res) => {
  try {
    logger.info("📋 Fetching all chargers", {
      timestamp: new Date().toISOString()
    });

    const chargers = await getAllChargers();
    
    res.json({
      success: true,
      data: chargers,
      count: chargers.length,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error("❌ Error fetching chargers", {
      error: error.message,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * GET /api/chargers/:id
 * Get charger by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    logger.info("📋 Fetching charger by ID", {
      chargerId: id,
      timestamp: new Date().toISOString()
    });

    const charger = await getChargerById(id);
    
    if (!charger) {
      return res.status(404).json({
        success: false,
        error: "Charger not found",
        timestamp: new Date().toISOString()
      });
    }

    res.json({
      success: true,
      data: charger,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error("❌ Error fetching charger", {
      chargerId: req.params.id,
      error: error.message,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * POST /api/chargers
 * Create new charger
 */
router.post("/", async (req, res) => {
  try {
    const chargerData = req.body;
    
    logger.info("➕ Creating new charger", {
      chargerData,
      timestamp: new Date().toISOString()
    });

    const charger = await createCharger(chargerData);

    res.status(201).json({
      success: true,
      data: charger,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error("❌ Error creating charger", {
      error: error.message,
      chargerData: req.body,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * PUT /api/chargers/:id
 * Update charger
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    logger.info("✏️ Updating charger", {
      chargerId: id,
      updateData,
      timestamp: new Date().toISOString()
    });

    const charger = await updateCharger(id, updateData);

    res.json({
      success: true,
      data: charger,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error("❌ Error updating charger", {
      chargerId: req.params.id,
      error: error.message,
      updateData: req.body,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * DELETE /api/chargers/:id
 * Delete charger
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    logger.info("🗑️ Deleting charger", {
      chargerId: id,
      timestamp: new Date().toISOString()
    });

    await deleteCharger(id);

    res.json({
      success: true,
      message: "Charger deleted successfully",
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error("❌ Error deleting charger", {
      chargerId: req.params.id,
      error: error.message,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

export default router;
```

### 15. Operations API Routes (src/api/routes/operations.js)
```javascript
import express from "express";
import { logger } from "../../utils/logger.js";
import {
  executeRemoteStartTransaction,
  executeRemoteStopTransaction,
  executeReset,
  executeChangeConfiguration,
  executeGetConfiguration
} from "../../ocpp/operations/index.js";

const router = express.Router();

/**
 * POST /api/operations/remote-start
 * Start transaction remotely
 */
router.post("/remote-start", async (req, res) => {
  try {
    const { chargerId, connectorId, idTag } = req.body;
    
    logger.info("🚀 Executing remote start transaction", {
      chargerId,
      connectorId,
      idTag,
      timestamp: new Date().toISOString()
    });

    const result = await executeRemoteStartTransaction(chargerId, connectorId, idTag);

    res.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error("❌ Error executing remote start transaction", {
      error: error.message,
      requestBody: req.body,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * POST /api/operations/remote-stop
 * Stop transaction remotely
 */
router.post("/remote-stop", async (req, res) => {
  try {
    const { chargerId, transactionId } = req.body;
    
    logger.info("🛑 Executing remote stop transaction", {
      chargerId,
      transactionId,
      timestamp: new Date().toISOString()
    });

    const result = await executeRemoteStopTransaction(chargerId, transactionId);

    res.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error("❌ Error executing remote stop transaction", {
      error: error.message,
      requestBody: req.body,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * POST /api/operations/reset
 * Reset charger
 */
router.post("/reset", async (req, res) => {
  try {
    const { chargerId, type = "Soft" } = req.body;
    
    logger.info("🔄 Executing charger reset", {
      chargerId,
      type,
      timestamp: new Date().toISOString()
    });

    const result = await executeReset(chargerId, type);

    res.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error("❌ Error executing charger reset", {
      error: error.message,
      requestBody: req.body,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * POST /api/operations/change-configuration
 * Change charger configuration
 */
router.post("/change-configuration", async (req, res) => {
  try {
    const { chargerId, key, value } = req.body;
    
    logger.info("⚙️ Executing change configuration", {
      chargerId,
      key,
      value,
      timestamp: new Date().toISOString()
    });

    const result = await executeChangeConfiguration(chargerId, key, value);

    res.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error("❌ Error executing change configuration", {
      error: error.message,
      requestBody: req.body,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * POST /api/operations/get-configuration
 * Get charger configuration
 */
router.post("/get-configuration", async (req, res) => {
  try {
    const { chargerId, keys = [] } = req.body;
    
    logger.info("📋 Executing get configuration", {
      chargerId,
      keys,
      timestamp: new Date().toISOString()
    });

    const result = await executeGetConfiguration(chargerId, keys);

    res.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error("❌ Error executing get configuration", {
      error: error.message,
      requestBody: req.body,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

export default router;
```

### 16. Logger Utility (src/utils/logger.js)
```javascript
import winston from "winston";

/**
 * Configure Winston logger
 */
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: "ocpp-csms" },
  transports: [
    // Console transport
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    
    // File transports
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error"
    }),
    new winston.transports.File({
      filename: "logs/combined.log"
    }),
    new winston.transports.File({
      filename: "logs/ocpp-traffic.log",
      level: "info"
    })
  ]
});

export { logger };
```

### 17. Environment Configuration (.env.example)
```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ocpp_csms"

# Server Configuration
PORT=3000
OCPP_PORT=9220

# Logging
LOG_LEVEL=info

# JWT Secret (if using authentication)
JWT_SECRET=your-secret-key

# Other configurations
NODE_ENV=development
```

## 🚀 Getting Started

### 1. Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd ocpp-csms

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your configuration
```

### 2. Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed initial data
npm run db:seed
```

### 3. Start the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### 4. Test the Implementation
```bash
# Test OCPP connection
curl -X POST http://localhost:3000/api/chargers \
  -H "Content-Type: application/json" \
  -d '{
    "chargerId": "TEST_CHARGER_001",
    "name": "Test Charger",
    "model": "Test Model",
    "vendor": "Test Vendor"
  }'

# Test remote start transaction
curl -X POST http://localhost:3000/api/operations/remote-start \
  -H "Content-Type: application/json" \
  -d '{
    "chargerId": "TEST_CHARGER_001",
    "connectorId": 1,
    "idTag": "TEST_USER"
  }'
```

## 📊 Logging and Monitoring

The implementation includes comprehensive logging at every step:

1. **Connection Events**: Charger connections, disconnections, authentication
2. **OCPP Messages**: All incoming and outgoing OCPP protocol messages
3. **Business Logic**: Transaction processing, status updates, meter readings
4. **API Requests**: HTTP API calls and responses
5. **Errors**: Detailed error logging with stack traces

### Log Files
- `logs/combined.log` - All application logs
- `logs/error.log` - Error logs only
- `logs/ocpp-traffic.log` - OCPP protocol traffic

## 🔍 Understanding the OCPP Flow

### Typical Charger Connection Flow:
1. **Charger Connects** → Authentication → BootNotification
2. **Periodic Heartbeats** → StatusNotifications
3. **User Authorization** → Authorize request
4. **Transaction Start** → StartTransaction
5. **Meter Readings** → MeterValues (periodic)
6. **Transaction End** → StopTransaction
7. **Charger Disconnects** → Connection cleanup

### Remote Operations Flow:
1. **HTTP API Call** → Validate charger connection
2. **OCPP Command** → Send command to charger
3. **Charger Response** → Process response
4. **Database Update** → Update relevant records
5. **API Response** → Return result to client

## 🛠️ Customization

This implementation is designed to be modular and extensible:

1. **Add new OCPP handlers** in `src/ocpp/handlers/`
2. **Add new remote operations** in `src/ocpp/operations/`
3. **Extend database schema** in `src/database/prisma/schema.prisma`
4. **Add new API endpoints** in `src/api/routes/`
5. **Customize business logic** in `src/services/`

## 📝 Notes

- All timestamps are in ISO format
- Transaction IDs are auto-generated
- Charger status is automatically managed
- Comprehensive error handling throughout
- Production-ready logging and monitoring
- Modular architecture for easy maintenance

This implementation provides a solid foundation for building a production-ready OCPP CSMS with comprehensive logging to help you understand the flow practically.
