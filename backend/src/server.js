import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import pool from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

import errorHandling from "./middleware/errorHandling.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || "5002";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", productRoutes);

// Error handling
app.use(errorHandling);

// Images
const imagesPath = path.join(__dirname, "images");
app.use("/images", express.static(imagesPath));

// Tets postgress connection
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT current_database()");
    console.log("Database name:", result.rows[0].current_database);
    res.send(`The current database name is ${result.rows[0].current_database}`);
  } catch (error) {
    console.error("Error quering database", error);
    res.status(500).send("Error retrieving database name");
  }
});

// Server running
app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
