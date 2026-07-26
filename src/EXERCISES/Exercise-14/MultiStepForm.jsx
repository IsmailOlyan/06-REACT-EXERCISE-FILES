import { useReducer } from 'react';

const initialState = {
    step: 1, // Start at step 1
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'Update':
            return { ...state, [action.field]: action.value };
        case 'Next':
            return { ...state, step: state.step + 1 }; 
        case 'Prev':
            return { ...state, step: state.step - 1 };
        case 'Reset':
            return initialState;
        default:
            return state;
    }
};

const MultiStepForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handlechange = (event) => {
      
        dispatch({ 
            type: 'Update', 
            field: event.target.name, 
            value: event.target.value 
        });
    };

    const Next = () => dispatch({ type: 'Next' });
    const Prev = () => dispatch({ type: 'Prev' });
    const Reset = () => dispatch({ type: 'Reset' });

    const handleSubmit = () => {
        alert('Form submitted successfully!');
        Reset();
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Multi Step Registration Form</h1>

            {/* Step 1 */}
            {state.step === 1 && (
                <>
                    <h2>Step 1: Profile Page</h2>
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                        type="text" 
                        name="firstName" 
                        id="firstName" 
                        value={state.firstName} 
                        onChange={handlechange} 
                    /> <br />

                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        value={state.lastName} 
                        onChange={handlechange} 
                    /> <br />

                    <button onClick={Next}>Next</button>
                </>
            )}

            {/* Step 2 */}
            {state.step === 2 && (
                <>
                    <h2>Step 2: Contact Page</h2>
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={state.email} 
                        onChange={handlechange} 
                    /> <br />

                    <label htmlFor="phone">Phone: </label>
                    <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        value={state.phone} 
                        onChange={handlechange} 
                    /> <br />

                    <button onClick={Prev}>Back</button>
                    <button onClick={Next}>Next</button>
                </>
            )}

            {/* Step 3 */}
            {state.step === 3 && (
                <>
                    <h2>Step 3: Review Page</h2>
                    <h3>First Name: {state.firstName}</h3>
                    <h3>Last Name: {state.lastName}</h3>
                    <h3>Email: {state.email}</h3>
                    <h3>Phone: {state.phone}</h3>

                    <button onClick={Prev}>Back</button>
                    <button onClick={handleSubmit}>Submit</button>
                </>
            )}

            {/* Completion Screen */}
            {state.step > 3 && (
                <div>
                    <h3>Form Completed</h3>
                    <button onClick={Reset}>Start Over</button>
                </div>
            )}
        </div>
    );
};

export default MultiStepForm; 