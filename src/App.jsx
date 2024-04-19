import React, { useState } from 'react';
import UseToken from './components/UseToken';
import routes from "~react-pages";
import Login from "./components/Login/Login";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

export default function App() {
    const { token, setToken } = UseToken();
    if(!token) {
      return <Login setToken={setToken} />
    }
  


    return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}
