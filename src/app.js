// src/app.js
import express from "express";

export const app = express();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});
