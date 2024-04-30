"use client";
import React from 'react'
import { useEffect, useState } from 'react'


export default function alprdData() {
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
  const alprdPlates = alprdKeys.map((plate, index) => {
    return (
      <div key={index}>
        <p>{plate}</p>
      </div>
    );
  });
  const alprdimages = alprdValues.map((img, index) => {
    return (
      <div key={index}>
        <p>{img}</p>
      </div>
    );
  });

  return (
    <div>
      {alprdPlates},   {alprdimages}
    </div>
  );
}



