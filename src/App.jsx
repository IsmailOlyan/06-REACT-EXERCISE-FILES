// import UserCard from "./UserCard";
// import UserCard from './components/Exercise-01/UserCard';
// import Layout from './Layout'
// import Blog from './components/Exercise-03/UserCard';
// import UserCard from './components/Exercise-03/UserCard';

// setCount toggle 
// import { useState } from "react";
import ToggleButton from './Components/Exercise-04/ToggleButton';


function App(){

  // setCount toggle
  // const [count, setCount] = useState(0);
  // const increament = ()=>{
    
  //   setCount(count + 1)
  // }

  return (
    <>
      {/* < UserCard/> */}
      {/* <Layout /> */}
      {/* <Blog /> */}


      {/* <UserCard
        name="Eng Ismail Olyan"
        email="ismaaciil1432@gmail.com"
      />
      <UserCard
        name="Eng Abdirahman Alasow"
        email="alasow@gmail.com"
      />
      <UserCard
        name="Eng Omar Abdi"
        email="mromarabdi@gmail.com"
      /> */}
  
  {/* setCount toggle */}
  {/* <h1>you clicked {count} times</h1>
  <button onClick={increament} style={{ backgroundColor: 'blue', color: 'white' }}>
    click me
  </button> */}
      <ToggleButton />

    </>
  )
}


export default App;