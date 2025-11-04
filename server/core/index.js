import express from "express";
import { PrismaClient } from "./generated/prisma_client/index.js";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/", async (req, res) => {
  const userCount = await prisma.connector.count();
  res.json(
    userCount === 0
      ? "No connector have been added yet."
      : "Some users have been added to the database."
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
