"use client";
import React from 'react'
import { useEffect, useState } from 'react'


export default function alprdData() {
  const [state, setState] = useState([]);
  const alprdKeys = Object.keys(state);
  const alprdValues = Object.values(state);
  async function getData() {
    //const res = await fetch('http://192.168.1.197:5000/alprd1/db2');
    const res = await fetch('http://192.168.1.122:5000/alprd1/db2');
    const data = await res.json();
    setState(data);
  }
  useEffect(() => {
    getData();
  }, [])
  console.log(alprdKeys)
  return (
    <div>
      {alprdValues.map((plates, index) => {
        return (
          <div key={index}>
            <div className="bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800 flex flex-col flex-wrap sm:flex-row">
              <div className="w-full sm:w-1/4 xl:w-1/4">
                <div className="hover:bg-neutral-300 dark:hover:bg-neutral-900  rounded-xl p-4 text-start outline-none " >
                  <p className="font-bold text-neutral-800 dark:text-neutral-200">
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/2">
                <div className="hover:bg-neutral-300 dark:hover:bg-neutral-900  p-4 text-start outline-none " >
                  <p className="text-xs  text-blue-800 dark:text-blue-400">
                    <a href={plates} target="_blank" rel="noopener noreferrer">{plates}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}