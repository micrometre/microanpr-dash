"use client";
import React from 'react'
import { useEffect, useState } from 'react'


export default function alprdDataTable() {
  const [state, setState] = useState([]);
  async function getData() {
    const res = await fetch('http://192.168.1.197:5000/alprd1/db2');
    const data = await res.json();
    setState(data);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
      <div>
        {Object.keys(state).map((key, i) => (
          <p className="text-neutral-800 dark:text-neutral-200 ]" key={i}  >
            <span className="">
              {i}
              <span className="ms-6 grow">
                <span 
                >
                  {key}
                </span>
              </span>
              <span className="ms-6 grow">
                <span 
                >
                  <a href={state[key]} target='_blank'>
                  {state[key]}
                  </a>
                </span>
              </span>
            </span>
          </p>
        ))}
      </div>
    </div>
  );

}



