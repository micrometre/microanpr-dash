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
          <label className="btn">
            <input type="file" accept="image/*" onChange={selectImage} />
          </label>
        </div>

        <div className="col">
          <button
            className="btn "
            onClick={upload}
          >
            Upload
          </button>
        </div>
      </div>
        <div className="progress bg-green-800">
          <div
            className="progress-bar progress-bar-info"
            aria-valuenow={progress}
            aria-valuemax={100}
            style={{ width: 100 + "%" }}
          >
            {progress}%
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


