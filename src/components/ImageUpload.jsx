
import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        if (imageFile) {
            setSelectedImage(imageFile);
        }
    };

    const handleUpload = async () => {
        if (!selectedImage) {
            return alert('Please select an image to upload.');
        }

        const formData = new FormData();
        formData.append('image', selectedImage);

        setProgress(0); // Reset progress before upload

        try {
            const response = await axios.post(
                '[YOUR_BACKEND_API_ENDPOINT]', // Replace with your endpoint URL
                formData,
                {
                    onUploadProgress: (event) => {
                        const uploadProgress = Math.round((event.loaded * 100) / event.total);
                        setProgress(uploadProgress);
                    },
                }
            );

            console.log('Image uploaded successfully:', response.data);
            // Handle successful upload (e.g., display success message)
        } catch (error) {
            console.error('Upload failed:', error);
            // Handle upload errors (e.g., display error message)
        } finally {
            setSelectedImage(null); // Clear selected image after upload
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && (
                <div>
                    <span>Selected image: {selectedImage.name}</span>
                    <button onClick={handleUpload}>Upload</button>
                    <br />
                    <progress value={progress} max={100} />
                </div>
            )}
        </div>
    );
};

export default ImageUpload;




export function ImageUpload1(props) {
    return (
        <div className="bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800 flex flex-col flex-wrap sm:flex-row">
            <div class="w-full sm:w-1/2 xl:w-1/3">
                <div class="mb-4">
                    <div class="w-full rounded-2xl bg-white p-4 shadow-lg">
                        <div class="mb-6 flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="flex flex-col">
                                    <span class="ml-2 font-bold text-black">
                                        Upload Video
                                    </span>
                                </div>
                                <div>
                                    <input type="file" accept="image/*" onChange={handleImageChange} />
                                    {selectedImage && (
                                        <div>
                                            <span>Selected image: {selectedImage.name}</span>
                                            <button onClick={handleUpload}>Upload</button>
                                            <br />
                                            <progress value={progress} max={100} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className='h-2 w-full bg-gray-300 rounded overflow-hidden'>
            <div
                style={{ width: `${progressPercentage}%` }}
                className={`h-full ${progressPercentage < 40 ? 'bg-red-600' : 'bg-green-600'
                    }`}
            ></div>
        </div>
    );
};
