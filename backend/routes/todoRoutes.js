import express from "express";
import { createTodo, getAllTodos, getTodoById } from "../controllers/todoController.js";

const router = express.Router();

router.post('/', createTodo);
router.get('/', getAllTodos);
router.get("/:id", getTodoById);

export default router