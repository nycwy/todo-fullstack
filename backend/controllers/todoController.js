import { Todo } from "../models/TodoModel.js";

//Create Todo
const createTodo = async (req, res) => {
    try {
        const { title, isCompleted, priority } = req.body;
        if (!title || title.trim() === "") {
            return res.status(400).json({ message: "Title field is required" });
        }
        const newTodo = new Todo({ title, isCompleted, priority });
        await newTodo.save();
        res.status(201).json({ message: "Todo added to the list: ", todo: newTodo });
    } catch (error) {
        console.log("Error creating a todo: ", error);
        res.status(500).json({ message: "Server error" });
    }
};

//Read Todo
const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({ count: todos.length, data: todos });
    } catch (error) {
        console.log("Error fetching todos", error);
        res.status(500).json({ message: "Server error" });
    }
};

export { createTodo, getAllTodos };