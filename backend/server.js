import express from "express";
import { config as configDotenv } from "dotenv";
import connectDB from "./Db/Db.js";
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import bodyParser from "body-parser";


const app = express();

app.use(cors());
app.use(bodyParser.json());

// Load environment variables
configDotenv();
connectDB();

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
