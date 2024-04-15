import { Upload, Progress } from "antd";
import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";


export default function FileUpload(props) {
    const [defaultFileList, setDefaultFileList] = useState([]);
    const [progress, setProgress] = useState(0);

    const uploadImage = async options => {
        const { onSuccess, onError, file, onProgress } = options;

        const fmData = new FormData();
        const config = {
            headers: { "content-type": "multipart/form-data" },
            onUploadProgress: event => {
                const percent = Math.floor((event.loaded / event.total) * 100);
                setProgress(percent);
                if (percent === 100) {
                    setTimeout(() => setProgress(0), 1000);
                }
                onProgress({ percent: (event.loaded / event.total) * 100 });
            }
        };
        fmData.append("image", file);


        
        try {

            const body = new FormData();
            body.append("file", file);
            const res = await fetch("http://127.0.0.1:5000/ ", {
                method: "POST",
                body,
                config
            });

            onSuccess("Ok");
            console.log("server res: ", res);
        } catch (err) {
            console.log("Eroor: ", err);
            const error = new Error("Some error");
            onError({ err });
        }
    };

    const handleOnChange = ({ file, fileList, event }) => {
        // console.log(file, fileList, event);
        //Using Hooks to update the state to the current filelist
        setDefaultFileList(fileList);
        //filelist - [{uid: "-1",url:'Some url to image'}]
    };

    return (
        <div class="container">
            <Upload
                accept="image/*"
                customRequest={uploadImage}
                onChange={handleOnChange}
                listType="picture-card"
                defaultFileList={defaultFileList}
                className="image-upload-grid"
            // onProgress={({ percent }) => {
            //   console.log("progre...", percent);
            //   if (percent === 100) {
            //     setTimeout(() => setProgress(0), 1000);
            //   }
            //   return setProgress(Math.floor(percent));
            // }}
            >
                {defaultFileList.length >= 1 ? null : <div>Upload Button</div>}
            </Upload>
            {progress > 0 ? <Progress percent={progress} /> : null}
        </div>
    );
}