import { useState, useEffect } from 'react';

const Countdown = () => {
    // 1. State-ka kaydinaya nambarka hadda socda (Display-ga)
    const [seconds, setSeconds] = useState(30);
    
    // 2. State-ka kaydinaya nambarka uu isticmaalahu soo qoray (Input-ka)
    const [initialSeconds, setInitialSeconds] = useState(30);
    
    // 3. State-ka sheegaya in saacaddu gubanayso/socoto iyo in kale
    const [isRunning, setIsRunning] = useState(false);

    // Function-ka marka uu isticmaalahu nambar cusub ku qoro input-ka
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        setInitialSeconds(value);
        setSeconds(value); // Si uu nambarka shaashadda u beddelo isla markaaba
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Countdown Timer</h2>
            
            {/* Halkaan waa input-kii assignment-ka laga rabay */}
            <input 
                type="number" 
                value={initialSeconds} 
                onChange={handleInputChange} 
            />
            
            {/* Halkaan waa meesha laga arkayo nambarka haray */}
            <h1>Waqtiga Haray: {seconds}s</h1>
        </div>
    );
};

export default Countdown;