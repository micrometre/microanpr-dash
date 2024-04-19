import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
  return fetch('http://192.168.56.10:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div className="login-wrapper bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800 ">
      <div
        className=' text-lg font-bold text-neutral-800 dark:text-neutral-200'
      >

        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input
              className=' text-lg font-bold text-neutral-900 dark:text-neutral-900'
              type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input 
              className=' text-lg font-bold text-neutral-900 dark:text-neutral-900'
            type="password" onChange={e => setPassword(e.target.value)} 
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};