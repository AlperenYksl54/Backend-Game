import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("Connecting to DB:", process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("Mongo DB ERROR:", err));

app.use("/auth", authRoute);

app.listen(process.env.PORT, () => {
    console.log(`Backend running on port ${process.env.PORT}`);
});
