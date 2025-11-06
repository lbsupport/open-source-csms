import { serverConfig } from "./config/server.config.js";
import { OCPPServerService } from "./services/server.service.js";

const ocppServer = new OCPPServerService(serverConfig);
ocppServer.start(serverConfig.port);
