const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests
  message: {
    error: "Too many requests, please try again later.",
  },
});

app.use("/api", limiter);

app.get("/", (req, res) => {
  res.send("Server running");
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    time: new Date(),
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});