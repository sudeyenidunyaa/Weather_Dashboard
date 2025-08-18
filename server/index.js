// server/index.js  (CommonJS)
const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

// Sağlık kontrolü
app.get("/api/health", (_, res) => res.json({ ok: true }));

// Current weather: /api/weather?city=Istanbul
app.get("/api/weather", async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const url = "http://api.weatherapi.com/v1/current.json";
    const { data } = await axios.get(url, {
      params: { key: process.env.WEATHER_API_KEY, q: city, aqi: "no" },
    });
    res.json(data);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json({ error: "Weather API error", detail: err.response?.data || err.message });
  }
});

// Forecast: /api/weather/forecast?city=Istanbul&days=5
app.get("/api/weather/forecast", async (req, res) => {
  const { city, days = 5 } = req.query;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const url = "http://api.weatherapi.com/v1/forecast.json";
    const { data } = await axios.get(url, {
      params: { key: process.env.WEATHER_API_KEY, q: city, days, aqi: "no", alerts: "no" },
    });
    res.json(data);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json({ error: "Weather API error", detail: err.response?.data || err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
