// import UserCard from "./UserCard";
// import UserCard from './components/Exercise-01/UserCard';
// import Layout from './Layout'
// import Blog from './components/Exercise-03/UserCard';

import UserCard from './components/Exercise-03/UserCard';
function App(){
  return (
    <>
      {/* < UserCard/> */}
      {/* <Layout /> */}
      {/* <Blog /> */}


      <UserCard
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
      />

    </>
  )
}


export default App;