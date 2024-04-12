import { useState } from "react";
import UploadService from "../services/FileUploadService";


const ImageUpload: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;
    setCurrentImage(selectedFiles?.[0]);
    setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
    setProgress(0);
    console.log(progress)
  };
  function upload() {
    setProgress(100);
    if (!currentImage) return;
    UploadService.upload(currentImage, (event: any) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    });
    console.log(progress)
  }
  return (
    <div>
      <div className="row">
        <div className="col">
          <label>
          </label>
          <label className="btn">
            File progress: <progress value="0" max="100" />
            {progress}%
            <input type="file" accept="image/*" onChange={selectImage} />
          </label>
        </div>

        <div className="col">
          <button
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"

            onClick={upload}
          >
            Upload
          </button>
        </div>
      </div>
      {previewImage && (
        <div>
          <img className="preview" src={previewImage} alt="" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;


