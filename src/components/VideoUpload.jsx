import { useState, useRef } from "react";
import "./VideoUpload.css"
import ExportVideoDb from "./ExportVideoDb";
import VisdeoSse from "./VisdeoSse";
import ImagesSse from "./ImagesSse";
const videoUploadUrl = import.meta.env.VITE_APP_VIDEO_UPLOAD

export default function VideoUpload() {
	// FIles States
	const [imagePreview, setImagePreview] = useState(null);
	const [videoPreview, setVideoPreview] = useState(null);
	const [file, setFile] = useState();
	const [image, setImage] = useState(null);
	const [status, setStatus] = useState("initial");

	// FIle Picker Ref because we are not useing the standard File picker input
	const filePicekerRef = useRef(null);
	function previewFile(e) {
		// Reading New File (open file Picker Box)
		const reader = new FileReader();
		// Gettting Selected File (user can select multiple but we are choosing only one)
		const selectedFile = e.target.files[0];
		if (selectedFile) {
			setStatus("initial");
			reader.readAsDataURL(selectedFile);
			setFile(URL.createObjectURL(e.target.files[0]));
			setImage(selectedFile);
		}
		// As the File loaded then set the stage as per the file type
		reader.onload = (readerEvent) => {
			if (selectedFile.type.includes("image")) {
				setImagePreview(readerEvent.target.result);
			} else if (selectedFile.type.includes("video")) {
				setVideoPreview(readerEvent.target.result);
			}
		};
	}


	async function handleUpload(event) {
		if (file) {
			setStatus("uploading");
			const body = new FormData();
			body.append("file", image);
			try {
				const response = await fetch(videoUploadUrl, {
				//const response = await fetch("http://192.168.1.122:5000/upload_video/", {
					method: "POST",
					body
				});
				console.log(response);
				setStatus("success");
			} catch (error) {
				console.error(error);
				setStatus("fail");
			}
		}
	}


	function clearFiles() {
		setImagePreview(null);
		setVideoPreview(null);
		setStatus(null)
	}

	return (
		<div>



			<div className=" dark:bg-neutral-800  bg-white relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-5xl">
				<div className="flex flex-col md:flex-row gap-8 md:gap-12">
					<div className="md:basis-1/2 md:py-4 md:self-center">
						<div className="flex justify-center items-center pb-4">
							<div className="btn-container">
								<input
									ref={filePicekerRef}
									accept="image/*, video/*"
									onChange={previewFile}
									type="file"
									hidden
								/>
								<div>
									<button className="btn" onClick={() => filePicekerRef.current.click()}>
										Choose
									</button>
								{(imagePreview || videoPreview) && (
									<button className="btn" onClick={clearFiles}>
										x
									</button>
								)}
								</div>
							</div>
						</div>
						<button
							className="roup inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-[#fa5a15] px-4 py-3 text-sm font-bold text-neutral-50 outline-none ring-zinc-500 transition duration-300 hover:bg-[#e14d0b] focus-visible:ring active:bg-[#e14d0b] disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none 2xl:text-base"
							type="submit"
							onClick={handleUpload}
						>
							Start Video lookup
							<Result status={status} />
						</button>

						<div className="">
							<div className="flex">
								<div className="mt-4 flex items-center rtl:mr-0 flex-col mr-4 rtl:ml-4">

									<div className="flex justify-center items-center">
										<ExportVideoDb />

									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="relative md:basis-1/2">
						<div className="preview">
							<VisdeoSse />
							<ImagesSse />
							<Result status={status} />
							{imagePreview != null && <img src={imagePreview} alt="" />}
							{videoPreview != null && <video controls src={videoPreview}></video>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
const Result = ({ status }) => {
	if (status === "success") {
		return <p
			className="dark:text-neutral-200 roup inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-[#3715fa] px-4 py-3 text-sm font-bold text-neutral-50 outline-none ring-zinc-500 transition duration-300 hover:bg-[#e14d0b] focus-visible:ring active:bg-[#e14d0b] disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none 2xl:text-base"

		>✅ Uploaded successfully!</p>
	} else if (status === "fail") {
		return <p
		className="block text-lg font-bold text-neutral-800 dark:text-neutral-200"
		>❌ Upload failed!</p>
	} else if (status === "uploading") {
		return <p
		className="block text-lg font-bold text-neutral-800 dark:text-neutral-200"
		
		>⏳ Uploading started...</p>
	} else {
		return null
	}
}
