import React,{useState,useContext} from 'react'
import UserContext from '../context/userContext'



const Profile = () => {
  const {user} = useContext(UserContext)
  if(!user) return <h1>please login</h1>


  return <div> Welcome {user.username}</div>
}

export default Profile 