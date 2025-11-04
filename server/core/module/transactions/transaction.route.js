import express from "express";
import {
  createTransactionApi,
  getAllTransactionsApi,
  getTransactionByIdApi,
  updateTransactionApi,
  deleteTransactionApi,
} from "./transaction.controller.js";

const router = express.Router();

router.get("/", getAllTransactionsApi);
router.post("/", createTransactionApi);
router.get("/:id", getTransactionByIdApi);
router.put("/:id", updateTransactionApi);
router.delete("/:id", deleteTransactionApi);

export default router;
