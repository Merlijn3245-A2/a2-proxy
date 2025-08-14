// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// Put your real API key here
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlfaWQiOiIxNGQ5M2IzYS0yZGQzLTRhYjgtYTdkMi1iZWMyMTkwNjAxMjQiLCJrZXlfdHlwZSI6InVzZXIiLCJvd25lcl9pZCI6IjYwNTM0MTM2MDEzOTQ2ODgiLCJjcmVhdGVkX2F0IjoiMjAyNS0wNC0yNSAwNjozMDoyOS45OTM0NDUifQ.h3vHWUjDGiKn0tk2sNIoVW6K1BD671o9pKmXwqdKiSg";

app.get("/stations", async (req, res) => {
  try {
    const response = await fetch("https://a2-station-api-prod-708695367983.us-central1.run.app/v2/stations", {
      headers: { "x-api-key": API_KEY }
    });
    const data = await response.json();
    res.json(data); // send API data directly to frontend
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stations", details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
