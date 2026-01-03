import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js"
import { connectDB } from "./database/db.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 8000

// app.use(cors());
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());


connectDB();

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})