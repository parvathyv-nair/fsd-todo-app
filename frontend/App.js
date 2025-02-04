import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        axios.get('https://your-backend-url.onrender.com/todos')
            .then((res) => setTodos(res.data));
    }, []);

    const addTodo = () => {
        axios.post('https://your-backend-url.onrender.com/todos', { text: newTodo })
            .then((res) => {
                setTodos([...todos, res.data]);
                setNewTodo('');
            });
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
