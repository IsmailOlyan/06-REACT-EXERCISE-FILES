import { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleTodo = () => {
        if (inputValue.trim() === '') return;

        const newTodo = {
            id: crypto.randomUUID(),
            text: inputValue,
            completed: false
        };

        setTodos([...todos, newTodo]);
        setInputValue('');
    }

    return (
        <>
            <h1 className='bg-green-500'>My Todo List:</h1>

            <input
                type="text"
                value={inputValue}
                onChange={ (e) => setInputValue(e.target.value)} />

            <button onClick={handleTodo}>Add TodoList</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
                <button >Delete</button>

            </ul>

        </>
    )
}

export default TodoList;

