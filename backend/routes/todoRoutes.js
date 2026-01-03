import express from "express";
import { createTodo, getAllTodos, getTodoById, updateTodo } from "../controllers/todoController.js";

const router = express.Router();

router.post('/', createTodo);
router.get('/', getAllTodos);
router.get("/:id", getTodoById);
router.patch("/:id", updateTodo);

export default router