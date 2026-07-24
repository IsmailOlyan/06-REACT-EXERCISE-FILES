import { useReducer } from 'react';

const initialState = {
    counterA: 0,
    counterB: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_A':
            return { ...state, counterA: state.counterA + 1 };
        case 'DECREMENT_A':
            return { ...state, counterA: state.counterA > 0 ? state.counterA - 1 : 0 };
        case 'RESET_A': //  optional task i added my own!
            return { ...state, counterA: 0 };

        case 'INCREMENT_B':
            return { ...state, counterB: state.counterB + 1 };
        case 'DECREMENT_B':
            return { ...state, counterB: state.counterB > 0 ? state.counterB - 1 : 0 };
        case 'RESET_B'://  optional task i added my own!
            return { ...state, counterB: 0 };

        case 'RESET_ALL': 
            return initialState;
        default:
            return state;
    }
};

const DoubleCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ padding: '20px' }}>
       
            <section>
                <h2>Counter A: {state.counterA}</h2>
                <button onClick={() => dispatch({ type: 'INCREMENT_A' })}>INCREMENT A +</button>
                <button onClick={() => dispatch({ type: 'DECREMENT_A' })}>DECREMENT A -</button>
                <button onClick={() => dispatch({ type: 'RESET_A' })}>RESET A</button>
            </section>


            <section>
                <h2>Counter B: {state.counterB}</h2>
                <button onClick={() => dispatch({ type: 'INCREMENT_B' })}>INCREMENT B +</button>
                <button onClick={() => dispatch({ type: 'DECREMENT_B' })}>DECREMENT B -</button>
                <button onClick={() => dispatch({ type: 'RESET_B' })}>RESET B</button>
            </section>

 
            <section style={{ marginTop: '15px' }}>
                <button onClick={() => dispatch({ type: 'RESET_ALL' })}> RESET ALL</button>
            </section>
        </div>
    );
};

export default DoubleCounter;