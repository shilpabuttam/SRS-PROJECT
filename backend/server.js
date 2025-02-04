import express from "express";
import { config as configDotenv } from "dotenv";
import connectDB from "./Db/Db.js";

const app = express();

// Load environment variables
configDotenv();
connectDB();

app.use("/", (req, res) => {
    res.send("Hello world");
});

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});
