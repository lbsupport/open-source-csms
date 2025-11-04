import express from "express";
import chargerRouter from "./chargers/charger.route.js";
import connectorRouter from "./connectors/connector.route.js";
import transactionRouter from "./transactions/transaction.route.js";

const router = express.Router();

router.use("/charger", chargerRouter);
router.use("/connector", connectorRouter);
router.use("/transaction", transactionRouter);

export default router;
