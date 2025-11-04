import express from "express";
import {
  createChargerApi,
  getAllChargersApi,
  getChargerByIdApi,
  updateChargerApi,
  deleteChargerApi,
} from "./charger.controller.js";

const router = express.Router();

// List
router.get("/", getAllChargersApi);

// Create
router.post("/", createChargerApi);

// Read
router.get("/:id", getChargerByIdApi);

// Update
router.put("/:id", updateChargerApi);

// Delete
router.delete("/:id", deleteChargerApi);

export default router;
