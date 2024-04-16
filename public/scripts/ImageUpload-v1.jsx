import React from "react";
import { useState, useEffect } from "react";




export default function FileUpload(props) {
    const [image, setImage] = useState(null);
    const [file, setFile] = useState();
  

    function uploadToClient(event) {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setFile(URL.createObjectURL(event.target.files[0]));
            setImage(i);
        }
    }
    async function uploadToServer(event) {
        console.log(event);
        const body = new FormData();
        body.append("file", image);
        const response = await fetch("http://127.0.0.1:5000/ ", {
            method: "POST",
            body
        });
    }
    return (
        <div>
            <label>
                File progress:
                <progress  value="0" max="100" />
            </label>
            <input type="file" accept="image/*" id="files" name="file" onChange={uploadToClient} />
            <img src={file} />

            <button
                type="submit"
                onClick={uploadToServer}
            >
                Send Video file to server
            </button>
            <div>
            </div>
        </div>
    );
}