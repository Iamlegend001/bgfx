import React,{useState,useContext} from 'react'
import UserContext from '../context/userContext'

const Login = () => {
  const[username,setUsername] = useState('')
  const[password,setPassword] = useState('')
  const {setUser} = useContext(UserContext)

  const handelSubmit = (e) => {
    e.preventDefault()
    setUser({username,password})
  }



  return (
    <div>
      <h1>Login</h1>
      <input type="text"
      value={username}
      onChange={(e)=>setUsername(e.target.value)} placeholder="username"/>
      <input type="password"value={password}
      onChange={(e)=>setPassword(e.target.value)}  placeholder="password"/>
      <button onClick={handelSubmit}>Login</button> 
    </div>
  )
}

export default Login