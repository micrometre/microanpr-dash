import React from 'react'
import { useEffect, useState } from "react";
const plateSsetUrl = import.meta.env.VITE_APP_PLATE_SSE


export default function VisdeoSse() {
    const [state, setState] = useState([]);

    useEffect(() => {
        const evtSource = new EventSource(plateSsetUrl);
        evtSource.addEventListener("myEventName", (event) => {
            const myEvent = event.data;
            console.log(evtSource);
            setState(myEvent);
            console.log(myEvent);
        });


        evtSource.onmessage = (event) => {
            const myEvent = JSON.parse(event.data);
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
                                <button type="button" className="hover:bg-neutral-300 dark:hover:bg-neutral-900  rounded-xl p-4 text-start outline-none " >
                                    <span className="flex">
                                        <svg className="mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-[#fa5a15] dark:fill-neutral-300 dark:hs-tab-active:fill-[#fb713b] md:h-7 md:w-7" height="48" viewBox="0 -960 960 960" width="48">
                                            <path d="M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z"
                                                className="">
                                            </path>
                                        </svg>
                                        <span className="ms-6 grow">
                                            <span className="block text-lg font-bold text-neutral-800 dark:text-neutral-200">
                                                <p className="font-bold">

                                                    {state}

                                                </p>
                                            </span>
                                        </span>
                                    </span>
                                </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
