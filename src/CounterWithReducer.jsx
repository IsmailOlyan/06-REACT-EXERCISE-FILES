import { useState, useReducer } from "react"
const intialState = {count: 0} 

const reducer = (state, action) =>{
    switch (action.type){
        case 'increament':
            return {count: state.count+1 }
        case 'Decreament':
            return{count: state.count - 1}
        case 'reset':
            return intialState
        default :
            return state
    }
}

const CounterWithReducer = () =>{
    const [counter, setCounter] = useState(0)
    const [state,dispatch] = useReducer (reducer, intialState);

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={()=> dispatch ({type: 'increament'})}>increament + </button>
            <button onClick={()=> dispatch ({type: 'Decreament'})}>Decreament - </button>
            <button onClick={()=> dispatch ({type: 'reset'})}>reset  </button>
        </div>
    )
}

export default CounterWithReducer;

//intial state: dat la manage-garenayo
// reducer Functin : waxa manage-garenayo state ka

// state: wuxu haayo hada
// action: wuxuu qaban rabo a, waxa laso racinayo: (type)