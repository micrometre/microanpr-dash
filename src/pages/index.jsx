import React from 'react'
import LogOut from '../components/LogOut'

console.log(import.meta.env.VITE_APP_TITLE); // "My App"
console.log(import.meta.env.VITE_APP_URL); // "My App"



const Home = () => {
  return (
      <LogOut/>
  )
}

export default Home