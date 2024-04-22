import React from 'react'
import { useEffect, useState } from "react";


export default function VisdeoSse() {
    const [state, setState] = useState([]);

    useEffect(() => {
        const evtSource = new EventSource("http://192.168.1.197:5000/alprd1_images");
        evtSource.addEventListener("myEventName", (event) => {
            // the event name here must be the same as in the API
            const myEvent = event.data;
            console.log(myEvent);
            setState(myEvent);
            console.log(event.data);
        });


        evtSource.onmessage = (event) => {
            const myEvent = (event.data);
            console.log(myEvent);
            setState(myEvent);
        };

        evtSource.onopen = (event) => {
            console.log(event);
        };

        evtSource.onerror = () => {
            evtSource.close();
        };

        return () => {
            evtSource.close();
        };
    }, []);


    return (
        <div>

            <div className="w-full sm:w-1/2 xl:w-1/3">
                <div className="mb-4">
                    <div className="flex h-auto">
                        <div className="flex flex-col rounded-xl bg-neutral-50 dark:bg-neutral-700">
                            <a href={state}>
                                <p className="font-bold">
                                    {state}
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
