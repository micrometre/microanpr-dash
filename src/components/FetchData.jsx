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
  const collection = alprdValues.map((plate, index) => {
    return (
      <div key={index}>
        <div className="mt-6 flow-root">
          <div className="inline-block min-w-full align-middle">
            <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
              <table className="hidden min-w-full text-gray-900 md:table">
                <tbody className="bg-white">
                  <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                    <td>{plate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    );
  });

  return (

    <>
      {collection} {/* Render the collection of items */}
    </>
  );
}