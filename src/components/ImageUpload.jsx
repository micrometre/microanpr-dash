import React, { useState } from "react"

const MultipleFileUploader = () => {
  const [files, setFiles] = useState(null)
  const [status, setStatus] = useState("initial")
  const [image, setImage] = useState(null);
  const [file, setFile] = useState();

  function handleFileChange(event) {
    if (event.target.files) {
      setStatus("initial")
      setFiles(event.target.files)
    }
  }

  function uploadToClient(event) {
    if (event.target.files && event.target.files[0]) {
        setStatus("initial")
        const i = event.target.files[0];
        setFile(URL.createObjectURL(event.target.files[0]));
        setImage(i);
        console.log(status);
    }
}


  async function handleUpload(event) {
    if (file) {
      setStatus("uploading")
      const body = new FormData();
      body.append("file", image);
      try {
        const response = await fetch("http://127.0.0.1:5000/ ", {
            method: "POST",
            body
        }); 
        console.log(response)
        setStatus("success")
      } catch (error) {
        console.error(error)
        setStatus("fail")
      }
    }
  }

  return (
    <>
      <div className="input-group">
        <label htmlFor="file" className="sr-only">
          Choose files
        </label>
        <input type="file" accept="image/*" id="files" name="file" onChange={uploadToClient} />
        <img src={file} />

      </div>

      <button
                type="submit"
                onClick={handleUpload}
            >
                Send Video file to server
            </button>

      <Result status={status} />
    </>
  )
}

const Result = ({ status }) => {
  if (status === "success") {
    return <p>✅ Uploaded successfully!</p>
  } else if (status === "fail") {
    return <p>❌ Upload failed!</p>
  } else if (status === "uploading") {
    return <p>⏳ Uploading started...</p>
  } else {
    return null
  }
}

export default MultipleFileUploader
