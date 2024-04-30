"use client";
import React from 'react'
import { useEffect, useState } from 'react'


export default function alprdDataTable() {
  const [state, setState] = useState([]);
  const alprdKeys = Object.keys(state);
  const alprdValues = Object.values(state);
  async function getData() {
    const res = await fetch('http://192.168.1.197:5000/alprd1/db2');
    const data = await res.json();
    setState(data);
  }
  useEffect(() => {
    getData();
  }, [])
  console.log(alprdKeys)
  return (
    <div>
      <div>
        {Object.keys(state).map((key, i) => (
          <p key={i}>
            <span> {i}</span>
            <span> {key}</span>
            <span className='p-10'>{state[key]}</span>
          </p>
        ))}
      </div>
    </div>
  );

}



