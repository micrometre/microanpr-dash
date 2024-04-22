"use client";
import { useState, useEffect } from "react";





export default function DataTable() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://192.168.1.197:5000/alprd1/db", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }, items
    })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);
  return (
    <div>
      {items.map((plates, index) => {
        return (
          <div key={index}>
            <div className="bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800 flex flex-col flex-wrap sm:flex-row">
              <div className="w-full sm:w-1/4 xl:w-1/4">
                <div className="hover:bg-neutral-300 dark:hover:bg-neutral-900  rounded-xl p-4 text-start outline-none " >
                  <p className="font-bold text-neutral-800 dark:text-neutral-200">
                    {plates[0]}
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/2">
                <div className="hover:bg-neutral-300 dark:hover:bg-neutral-900  p-4 text-start outline-none " >
                  <p className="text-xs  text-blue-800 dark:text-blue-400">
                    <a href={plates[1]} target="_blank" rel="noopener noreferrer">{plates[1]}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>

  );

}