import React, { useContext } from 'react'
import TodoContext from './TodoContext'

export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext)
 return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'Toggle', payload: todo.id })}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch({ type: 'Delete', payload: todo.id })}>
        Delete
      </button>
    </li>
  )
}
