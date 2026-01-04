import { useState } from "react"

export default function TodoForm() {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [isCompleted, setIsCompleted] = useState(false);

const handleSubmit = async (e) => {
        e.preventDefault();

        const todo = { title, priority, isCompleted };

        const response = await fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (response.ok) {
            setTitle('');
            setPriority('Medium');
            setIsCompleted(false);
            console.log('New todo added:', json);
        } else {
            console.log('Failed to add todo');
        }
    }

    return (
        <>
            <form action="post" className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-slate-200 mt-10" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-slate-800 text-center">Add a New Task</h2>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">Task Title: </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="priority" className="block text-sm font-medium text-slate-700 mb-1">Priority: </label>
                    <select
                        onChange={(e) => setPriority(e.target.value)}
                        value={priority}
                        id="priority"
                        className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <div className="flex items-center mb-6">
                    <label
                        htmlFor="isCompleted"
                        className="ml-2 block text-sm text-slate-700 font-medium cursor-pointer"
                    >Is Completed ?</label>
                    <input
                        type="checkbox"
                        onChange={(e) => setIsCompleted(e.target.checked)}
                        checked={isCompleted}
                        id="isCompleted"
                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                </div>
                <button className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-200">Add Task</button>
            </form>
        </>
    )
}