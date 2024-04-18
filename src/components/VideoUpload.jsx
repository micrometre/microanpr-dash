import { useState, useRef } from "react";
import "./VideoUpload.css"
export default function FilePreviewer() {
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
	const uploadToServer = async (event) => {
		const body = new FormData();
		body.append("file", image);
		const response = await fetch("http://127.0.0.1:5000/ ", {

			method: "POST",
			body
		});
	};

	async function handleUpload(event) {
		if (file) {
			setStatus("uploading");
			const body = new FormData();
			body.append("file", image);
			try {
				const response = await fetch("http://127.0.0.1:5000/ ", {
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
	}

	return (
		<div>
			<Result status={status} />

			<h1>Preview Image/Video</h1>

			<div className="btn-container">
				<input
					ref={filePicekerRef}
					accept="image/*, video/*"
					onChange={previewFile}
					type="file"
					hidden
				/>
				<button className="btn" onClick={() => filePicekerRef.current.click()}>
					Choose
				</button>
				{(imagePreview || videoPreview) && (
					<button className="btn" onClick={clearFiles}>
						x
					</button>
				)}
			</div>
			<button type="submit" onClick={handleUpload}	>
				<p>	Send Video file to server	</p>
			</button>
			<div className="preview">
				{imagePreview != null && <img src={imagePreview} alt="" />}
				{videoPreview != null && <video controls src={videoPreview}></video>}
			</div>
		</div>
	);
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
