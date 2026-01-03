import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium'
    }
}, { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);

export { Todo };