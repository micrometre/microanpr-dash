import React from 'react'
import LogOut from '../components/LogOut'


let hostUrl = import.meta.env.VITE_APP_LAPTOP_URL

console.log(hostUrl);

const Home = () => {
  return (
      <LogOut/>
  )
}

export default Home