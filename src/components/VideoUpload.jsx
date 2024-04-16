import React, { useState } from "react"
import "./ImageUpload.css"
const MultipleFileUploader = () => {
  const [status, setStatus] = useState("initial")
  const [image, setImage] = useState(null);
  const [file, setFile] = useState();

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

      <div className=" dark:bg-neutral-800  bg-white relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:basis-1/2 md:py-4 md:self-center">
            <form action="">
              <div className="relative mt-6">
                <label htmlFor="file" className="absolute left-0 ml-1 -translate-y-3 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">
                  Video
                </label>
              </div>
              <input type="file" className="mt-10  mb-6 text-lg font-bold text-neutral-800 dark:text-neutral-200 peer w-full border-b placeholder:text-transparent" accept="image/*" id="files" name="file" onChange={uploadToClient} />
            </form>
            <div className="">
              <div className="flex">
                <div className="flex items-center rtl:mr-0 flex-col mr-4 rtl:ml-4">
                  <div className="flex justify-center items-center pb-4">
                    <button
                      className="roup inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-[#fa5a15] px-4 py-3 text-sm font-bold text-neutral-50 outline-none ring-zinc-500 transition duration-300 hover:bg-[#e14d0b] focus-visible:ring active:bg-[#e14d0b] disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none 2xl:text-base"
                      type="submit"
                      onClick={handleUpload}
                    >
                      Send Video file to server
                      <Result status={status} />
                    </button>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="roup inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-[#fa5a15] px-4 py-3 text-sm font-bold text-neutral-50 outline-none ring-zinc-500 transition duration-300 hover:bg-[#e14d0b] focus-visible:ring active:bg-[#e14d0b] disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none 2xl:text-base"
                      type="submit"
                      onClick={handleUpload}
                    >
                      Download/Export CSV file
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:basis-1/2">
            <div className="input-group">
              <Result status={status} />
              <img src={file} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

const Result = ({ status }) => {
  if (status === "success") {
    return <p
      className="roup inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-[#3715fa] px-4 py-3 text-sm font-bold text-neutral-50 outline-none ring-zinc-500 transition duration-300 hover:bg-[#e14d0b] focus-visible:ring active:bg-[#e14d0b] disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none 2xl:text-base"

    >✅ Uploaded successfully!</p>
  } else if (status === "fail") {
    return <p>❌ Upload failed!</p>
  } else if (status === "uploading") {
    return <p>⏳ Uploading started...</p>
  } else {
    return null
  }
}

export default MultipleFileUploader
