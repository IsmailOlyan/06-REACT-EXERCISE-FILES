
import { useState, useReducer } from "react";

const intialState = [];

const reducer = (state, action) =>{

    switch(action.type){

        case 'Add':
            return [...state, action.payload]
        case 'Toggle':
            return state.map((todo)=> todo.id === action.payload ? {...todo, completed: !todo.completed } : todo);
        case 'Delete':
            return state.filter((todo) => todo.id !== action.payload)
        default :
            state;
    }
}
const TodoApp = () =>{

    const [state, dispatch] = useReducer(reducer, intialState)
    const [text, setText] = useState('')
 
        const handleAdd = ()=>{
          if(text.trim()){
            const newTodo = {
                id: Date.now(),
                text,
                Completed: false


            }
            dispatch ({type: 'Add', payload: newTodo})
            setText('')
          }  
        }
    return(
        <>
        <h2>Todo App</h2>
        <input type="text"
        value={text}
        onChange={(e)=> setText(e.target.value)} />

        <button onClick={handleAdd}>Add Todo</button>
        <ul>
            {
               state.map(todo =>(
                <li key={todo.id}>
                    
                   <span 
                   style={{textDecoration: todo.completed? 'line-through' : "none"}}
                   onClick={()=> dispatch({type:"Toggle", payload: todo.id})}>{todo.text}
                   </span> 
                   <button onClick={()=> dispatch({type: "Delete", payload: todo.id})}>Delete</button>
                </li>
               ))
            }
        </ul>
        </>
    )
}

export default TodoApp;