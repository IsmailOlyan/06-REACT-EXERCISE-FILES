import { useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(false)

    const handleLogin = () => {
    if (userName  && password !== "") {
      setIsLogin(true)

    }
    else {
      alert("please Enter UserName and Password to Enter")
    }
  };

  const handleLogout = () => {
    setUserName("")
    setPassword("")
    setIsLogin(false)
  }

  if (isLogin) {
    return (
      <>
        <h1>Welcome {userName}</h1>
        <button onClick={handleLogout}>Log Out</button>
      </>
    );
  }

  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <h1>Login To Enter </h1>
        <label htmlFor="userName">User Name: </label>
        <input type="text" value={userName}
         onChange={(e) => setUserName(e.target.value)} id="userName"
          />
          <br />
        <label htmlFor="password">Password: </label>
        <input type="password" value={password} 
        onChange={(e) => setPassword(e.target.value)} id="password" 
        /> 
        <br />

        <button type="submit" >Login</button>
      </form>
    </div>
  )
}

export default LoginForm;