import {useState, useEffect} from 'react'

const StopWatch = ( ) =>{
    const [time, setTime] = useState (0)
    const [isRunning, setIsRunning] = useState (false)

     useEffect (()=>{
        let timerId;
        if(isRunning){
            timerId= setInterval(()=>{
                setTime(prev => prev + 1)
            },1000)
        }

       return () => {
        clearInterval(timerId)
       }

    },[isRunning])

    const handleStart = () => {
        setIsRunning(true);
    }
    const handleStop = () => {
        setIsRunning(false);
    }
    const handleReset = () => {
        setIsRunning(false);
        setTime(0)
    }

    return (
        <>
        <h1>Saacada Soconeyso waa {time} Ilbiriqsi</h1>

        <button onClick={handleStart}>Bilow</button>
        <button onClick={handleStop}>Jooji</button>
        <button onClick={handleReset}>Soo celi</button>
        </>
    )
}

export default StopWatch;