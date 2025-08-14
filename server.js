import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const A2_API_URL = "https://a2-station-api-prod-708695367983.us-central1.run.app/v2/stations";
const API_KEY = process.env.A2_API_KEY; // we'll set this in Railway

app.get("/stations", async (req, res) => {
    try {
        const response = await fetch(A2_API_URL, {
            headers: { "x-api-key": API_KEY }
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch stations" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
