import { useState, useEffect } from "react";
import UploadService from "../services/FileUploadService";
import IFile from "../types/File";

const ImageUpload: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");
  const [imageInfos, setImageInfos] = useState<Array<IFile>>([]);

  useEffect(() => {
    UploadService.getFiles().then((response) => {
      setImageInfos(response.data);
    });
  }, []);

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;
    setCurrentImage(selectedFiles?.[0]);
    setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
  };

  const upload = () => {
    if (!currentImage) return;
    UploadService.upload(currentImage, (event: any) => {
      console.log(event)
    })
  };

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
            disabled={!currentImage}
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