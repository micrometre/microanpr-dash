import { useState, useEffect } from "react";

import {
    VideoCameraIcon,

} from '@heroicons/react/24/outline';

export default function FileUpload(props) {
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [file, setFile] = useState();
   
   
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    function uploadToClient(event) {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            console.log(event.target.files);
            setFile(URL.createObjectURL(event.target.files[0]));
            setImage(i);
        }
    }

    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", image);
        const response = await fetch("http://127.0.0.1:5000/ ", {
            method: "POST",
            body
        });
    };

    return (
        <div>
            <input type="file" name="myImage" onChange={uploadToClient} />
            <img src={file} />

            <button
                type="submit"
                onClick={uploadToServer}
            >
                Send Video file to server
            </button>
        </div>
    );
}