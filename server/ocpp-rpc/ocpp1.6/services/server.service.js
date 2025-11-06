import { RPCServer } from "ocpp-rpc";
import {
  handleBootNotification,
  handleHeartbeat,
  handleStatusNotification,
  handleDefault,
} from "../handlers/index.js";

/**
 * OCPPServerService - Main class for handling OCPP 1.6 server operations
 * Manages WebSocket connections and OCPP message handling for charging stations
 */
export class OCPPServerService {
  /**
   * Initialize the OCPP server with configuration
   * @param {Object} config - Server configuration options
   */
  constructor(config) {
    this.server = new RPCServer(config);
    this.setupAuth();
    this.setupEventHandlers();
  }

  /**
   * Configure authentication for incoming WebSocket connections
   * Accepts all connections and assigns the charger ID as the session ID
   */
  setupAuth() {
    this.server.auth((accept, reject, handshake) => {
      const chargerId = handshake.identity;
      accept({ sessionId: chargerId });
    });
  }

  /**
   * Set up event listeners for client connections
   * The 'client' event is emitted whenever a new charging station connects to the server
   * .bind(this) ensures that inside handleClientConnection, 'this' refers to the OCPPServerService instance
   * Without .bind(this), the function would lose its context and 'this' would be undefined
   */
  setupEventHandlers() {
    this.server.on("client", this.handleClientConnection.bind(this));
  }

  /**
   * Handle new client connections and set up OCPP message handlers
   * @param {Object} client - Connected client object
   */
  handleClientConnection(client) {
    console.log(`${client.session.sessionId} connected!`);

    // Register handlers for specific OCPP messages
    client.handle("BootNotification", (params) =>
      handleBootNotification({ params, client })
    );
    client.handle("Heartbeat", (params) => handleHeartbeat({ params, client }));
    client.handle("StatusNotification", (params) =>
      handleStatusNotification({ params, client })
    );
    // Default handler for unhandled message types
    client.handle((params) => handleDefault({ ...params, client }));

    // Handle client disconnection
    client.on("close", () => {
      console.log(`🔌 Charger disconnected: ${client.identity}`);
    });
  }

  /**
   * Start the OCPP server on the specified port
   * @param {number} port - Port number to listen on
   */
  async start(port) {
    await this.server.listen(port);
    console.log("OCPP 1.6 server is listening on port", port);
  }
}
