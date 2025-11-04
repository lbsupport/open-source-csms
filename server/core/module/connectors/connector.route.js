import express from "express";
import {
  createConnectorApi,
  getAllConnectorsApi,
  getConnectorByIdApi,
  updateConnectorApi,
  deleteConnectorApi,
} from "./connector.controller.js";

const router = express.Router();

router.get("/", getAllConnectorsApi);
router.post("/", createConnectorApi);
router.get("/:id", getConnectorByIdApi);
router.put("/:id", updateConnectorApi);
router.delete("/:id", deleteConnectorApi);

export default router;
