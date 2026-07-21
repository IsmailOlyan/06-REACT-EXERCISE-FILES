import { useState } from "react";
// CSS Module-ka halkan ku dar:
import styles from "./counter.module.css"; 

function Counter() {
    const [count, setCount] = useState(0);

    const handleDecrement = () => { if (count > 0) setCount(count - 1); };
    const handleIncrement = () => { setCount(count + 1); };
    const handleReset = () => { setCount(0); };

    return (
        <div>
            <h1>Count : {count}</h1>
            <button disabled= {count == 0}onClick={handleDecrement}>Decrement</button>
            
            {/* Halkan ka eeg 'style' xarafka yar iyo className */}
            <button className={styles.buttonContainer} onClick={handleIncrement}>
                Increment
            </button>
            
            <button disabled = {count <=0 } onClick={handleReset}>Reset</button>
        </div>
    );
}
export default Counter;