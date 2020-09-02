import express from "express";
const app = express();

app.use("/health", (_req, res) => {
  res
    .status(200)
    .json({ uptime: process.uptime(), message: "OK", timestamp: Date.now() });
});

app.listen(8080, () => {
  console.log("Server listening at 8080...");
});
