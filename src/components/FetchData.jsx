"use client";
import React from 'react'
import { useEffect, useState } from 'react'
const alprDbUrl = import.meta.env.VITE_APP_DB

export default function alprdDataTable() {
  const [state, setState] = useState([]);
  async function getData() {
    const res = await fetch(alprDbUrl);
    const data = await res.json();
    setState(data);
  }
  console.log(state)
  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
      <div>
      {state.map((user, index) => (
          <div key={index}>
             {user.Key},  {user.Values}
          </div>
        ))}
      </div>
    </div>
  );

}



