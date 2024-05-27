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
        {state.map((plate, index) => (
          <div key={index}>
            <p className="text-neutral-800 dark:text-neutral-200 ]"   >
             <span className="">
              {index}
              <span className="ms-6 grow">
                <span
                >
                  {plate.Key}
                </span>
              </span>
              <span className="ms-6 grow">
                <span
                >
                  <a href={plate.Values} target='_blank'>
                    {plate.Values}
                  </a>
                </span>
              </span>
            </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );

}



