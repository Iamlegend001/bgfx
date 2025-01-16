import React from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <h1>React aur chai and share is importatnt</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App