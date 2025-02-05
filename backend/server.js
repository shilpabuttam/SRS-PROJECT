import express from "express";
import { config as configDotenv } from "dotenv";
import connectDB from "./Db/Db.js";
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import bodyParser from "body-parser";
import {contactRouting} from "./routes/contactRouting.js";


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))

// Load environment variables
configDotenv();
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api', contactRouting);

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});
