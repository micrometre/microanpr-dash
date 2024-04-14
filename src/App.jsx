import React from "react";
import routes from "~react-pages";


import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

export default function App() {
    return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}
