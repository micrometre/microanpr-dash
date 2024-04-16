import React, { useState } from "react"

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

        <div class=" dark:bg-neutral-800  bg-white relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-5xl">
          <div class="flex flex-col md:flex-row gap-8 md:gap-12">
            <div class="md:basis-1/2 md:py-4 md:self-center">
              <div class="mb-8 md:mb-12 md:mx-auto rtl:text-right text-left">
                <label htmlFor="file" className="sr-only">
                  Choose files
                </label>
                <input type="file" accept="image/*" id="files" name="file" onChange={uploadToClient} />
              </div>
              <div class="">
                <div class="flex">
                  <div class="flex items-center rtl:mr-0 flex-col mr-4 rtl:ml-4">
                    <div>
                      <div class="flex justify-center items-center">
                        <button
                        className="roup inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-[#fa5a15] px-4 py-3 text-sm font-bold text-neutral-50 outline-none ring-zinc-500 transition duration-300 hover:bg-[#e14d0b] focus-visible:ring active:bg-[#e14d0b] disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none 2xl:text-base"
                          type="submit"
                          onClick={handleUpload}
                        >
                          Send Video file to server
                          <Result status={status} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative md:basis-1/2">
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
