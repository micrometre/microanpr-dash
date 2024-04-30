"use client";
import React from 'react'
import { useEffect, useState } from 'react'

const sampleJSON = {
  name: "Pluralsight",
  number: 1,
  address: "India",
  website: "https://www.pluralsight.com/"
};


export default function alprdDataTable() {
  return (
    <div>
      {Object.keys(sampleJSON).map((key, i) => (
        <p key={i}>
          <span>Key Name: {key}</span>
          <span className='p-10'>Value: {sampleJSON[key]}</span>
        </p>
      ))}
    </div>
  );

}



