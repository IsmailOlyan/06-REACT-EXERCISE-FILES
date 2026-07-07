import {useEffect, useState} from "react";

function App() {

    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        if(name == ''){
            document.title = 'Welcome';
        } else {
            document.title = `${greeting} ${name}`;
        }
    },[name, greeting] )

    return (
        <div>
            <h1>Enter Your Name</h1>
            <input type="text" 
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}/>

            <h1>Choose A Greeting</h1>
            <input type="text" 
            type="text"
            value={greeting}
            onChange={(e)=> setGreeting(e.target.value)}/>

        </div>
    )
}

export default App;
