import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js"
import { connectDB } from "./database/db.js";

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 8000

connectDB();

app.use('/api/todos', todoRoutes);
app.use('/api/todos', todoRoutes);

app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})