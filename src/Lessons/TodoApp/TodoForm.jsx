import React, { useState, useContext } from 'react';
import TodoContext from './TodoContext';

export const TodoForm = () => {
    const [text, setText] = useState('')

    const {dispatch} = useContext(TodoContext)

    const handleAdd = () => {
        if (text.trim()) {
            const newTodo = {
                id: Date.now(),
                text,
                completed: false
            }
            dispatch({ type: 'Add', payload: newTodo })
            setText('')
        }
    }

    return (
        <>
            <h2>Todo App</h2>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

            <button onClick={handleAdd}>Add Todo</button>
           
        </>
    )
};

export default TodoForm;
