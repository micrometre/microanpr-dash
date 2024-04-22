"use client";
import { useState, useEffect } from "react";





export default function DataTable() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://192.168.1.197:5000/alprd1/db", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },items
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
            <h2>{plates[0]}</h2>
            <h2>{plates[1]}</h2>
          </div>
        );
      })}
      </div>

    );

  return (

    <>
      {collection} {/* Render the collection of items */}
    </>
  );
}