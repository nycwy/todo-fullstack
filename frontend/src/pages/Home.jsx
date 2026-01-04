import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";

export default function Home() {
    const [todos, setTodos] = useState(null);
    
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(`/api/todos`);
            const json = await response.json();

            if (response.ok) {
                setTodos(json.data);
            }
        }
        fetchTodos();
    }, [])

    return (
        <div className="home">
            <div className="todos">
                <TodoForm />
                {todos && todos.map((todo) => (
                    <p key={todo._id}>
                        {todo.title}
                    </p>
                ))}
            </div>
        </div>
    )
}