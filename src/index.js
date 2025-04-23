const express = require("express");

const app = express();

// Middlewares
app.use(express.json());

// Default route
app.get("/", (request, response) => {
  response.send("Hello from Inventory!");
});

app.get("/health", (request, response) => {
  response.json({
      status: "OK"
  });
});

module.exports = app;