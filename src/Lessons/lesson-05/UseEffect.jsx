import {useEffect, useState} from "react";

const UseEffectE = () => {

        const [title, setTitle] = useState('');
        const [name, setName] = useState('');

        useEffect(() => {
            document.title = title + name;
        }, [title, name]);


    return (
        <div>
            <h1> Type to change useEffect titiles</h1>

            <label htmlFor="title">Title:</label> <br />
            <input type = "text"
            value = {title}
            onChange = {(e)=> setTitle(e.target.value)} /> <br />

            <label htmlFor="name">Name:</label> <br />
            <input type = "text"
            value = {name}
            onChange = {(e)=> setName(e.target.value)} />
        </div>
    );
 

}

export default UseEffectE;