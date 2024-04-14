import React from 'react'
import { useState } from "react";

import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    VideoCameraIcon,

} from '@heroicons/react/24/outline';
export default function ImageUpload(props) {
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", image);
        const response = await fetch("/api/upload", {
            method: "POST",
            body
        });
    };

    return (
        <div>
            <div class='bg-gray-200 min-h-screen flex flex-col items-center justify-center '>

                <div class='w-[420px] bg-white p-8 rounded-2xl  flex flex-col gap-12 '>
                    <div class='text-center'>
                        <h1 class='text-2xl font-medium'>Upload Your Files</h1>
                        <p class='text-gray-400 '>Files Should be less than 5 MB</p>
                    </div>

                    <div class='w-full p-12 border-2 rounded-2xl  group flex flex-col items-center justify-center border-dashed   border-blue-400'>
                        <svg class='w-14 aspect-square  group-hover:scale-105 ' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <g id="Open_Folder-2" data-name="Open Folder">
                                <path d="m45 18h-4v-4a2.996 2.996 0 0 0 -3-3h-15.25a2.9991 2.9991 0 0 1 -2.33-1.11l-1.96-2.41a3.9846 3.9846 0 0 0 -3.1-1.48h-11.36a2.996 2.996 0 0 0 -3 3v29.57a3.3672 3.3672 0 0 0 1.01 2.42 3.3672 3.3672 0 0 0 2.42 1.01h33.66a3.441 3.441 0 0 0 3.3-2.47l5.53-18.97a2.003 2.003 0 0 0 -1.92-2.56z" fill="#376cfb" />
                                <path d="m44.9987 18h-28.4262a3.43 3.43 0 0 0 -3.2925 2.47l-5.56 19.0614a3.4286 3.4286 0 0 1 -3.2914 2.4686h33.6638a3.43 3.43 0 0 0 3.2933-2.47l5.5331-18.97a2 2 0 0 0 -1.9201-2.56z" fill="#4294ff" />
                            </g>
                        </svg>
                        <p class='text-gray-400'>Drag & Drop your files here</p>
                    </div>

                    <div class='flex flex-col gap-4'>

                        <div class='w-full rounded-2xl flex flex-col gap-2 '>
                            <p class='text-gray-500'>Uploading Files</p>

                            <div class='flex flex-col gap-3'>

                                <div class='flex items-end gap-2'>
                                    <svg class='w-10 aspect-square' viewBox="0 0 791.454 791.454" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <g id="Vrstva_x0020_1_4_">
                                                <path d="m202.718 0h264.814l224.164 233.873v454.622c0 56.868-46.092 102.959-102.959 102.959h-386.019c-56.868 0-102.959-46.092-102.959-102.959v-585.536c0-56.867 46.091-102.959 102.959-102.959z" fill="#0263d1" />
                                                <g fill="#fff">
                                                    <path clip-rule="evenodd" d="m467.212 0v231.952h224.484z"
                                                        fill-rule="evenodd" opacity=".302" />
                                                    <path d="m195.356 564.73v-131.02h46.412c9.282 0 17.925 1.387 25.927 3.948 8.002 2.667 15.257 6.508 21.766 11.63 6.508 5.121 11.63 11.95 15.364 20.485s5.655 18.351 5.655 29.447-1.921 20.912-5.655 29.447-8.856 15.364-15.364 20.485-13.764 8.962-21.766 11.63c-8.002 2.561-16.644 3.948-25.927 3.948zm32.755-28.487h9.709c5.228 0 10.136-.64 14.51-1.814 4.481-1.28 8.535-3.307 12.376-5.975s6.828-6.508 8.962-11.523c2.241-4.908 3.307-10.883 3.307-17.711s-1.067-12.803-3.307-17.818c-2.134-4.908-5.121-8.749-8.962-11.416-3.841-2.774-7.895-4.694-12.376-5.975-4.374-1.174-9.282-1.814-14.51-1.814h-9.709zm161.855 29.981c-19.738 0-36.062-6.402-48.972-19.098-12.91-12.697-19.312-28.701-19.312-47.905 0-19.205 6.402-35.209 19.312-47.905 12.91-12.697 29.234-19.098 48.972-19.098 19.418 0 35.529 6.402 48.439 19.098 12.803 12.697 19.205 28.701 19.205 47.905s-6.402 35.209-19.205 47.905c-12.91 12.696-29.021 19.098-48.439 19.098zm-25.18-39.37c6.508 7.255 14.83 10.883 24.966 10.883s18.351-3.628 24.86-10.883c6.508-7.362 9.709-16.538 9.709-27.634s-3.201-20.272-9.709-27.634c-6.508-7.255-14.724-10.883-24.86-10.883s-18.458 3.628-24.966 10.883c-6.508 7.362-9.816 16.538-9.816 27.634s3.308 20.272 9.816 27.634zm170.71 39.37c-19.098 0-34.996-5.975-47.585-17.711-12.697-11.843-18.991-28.274-18.991-49.293 0-20.912 6.402-37.343 19.205-49.186 12.91-11.843 28.594-17.818 47.372-17.818 16.964 0 30.834 4.161 41.824 12.59 10.883 8.322 17.178 19.418 18.778 33.288l-33.075 6.722c-1.387-7.255-4.695-13.123-9.816-17.498s-11.096-6.615-17.925-6.615c-9.389 0-17.178 3.308-23.473 10.029-6.295 6.828-9.496 16.217-9.496 28.487s3.201 21.659 9.389 28.381c6.295 6.828 14.084 10.136 23.579 10.136 6.828 0 12.697-1.92 17.498-5.761s7.789-8.962 9.069-15.364l33.822 7.682c-3.094 13.23-9.923 23.473-20.592 30.834-10.562 7.363-23.792 11.097-39.583 11.097z" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <div class='w-full space-y-1'>
                                        <div class='flex justify-between'>
                                            <span>

                                                <p class='text-gray-500'>Uploading Files</p>
                                            </span>
                                            <span class='font-normal text-gray-500  '>80%</span>
                                        </div>
                                        <div class=' h-2 w-full bg-gray-300 rounded-md '>
                                            <div class=' h-2 w-10/12 bg-blue-500 rounded-md '></div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div class='absolute bottom-0 text-center left-0 right-0 p-4 bg-white rounded-t-2xl '>
                Just Say Hi 👋
                <a class='text-blue-600 font-medium' target="_blank" href="https://anmol-fzr.web.app/">Anmol</a>
            </div>
        </div>
    )
}
