import express from "express";
import apiGen1 from "./module/index.js";

const app = express();
app.use(express.json());

app.get("/health-check", async (req, res) => {
  res.json({ health: "healthy" });
});

app.use("/api/v1", apiGen1);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
