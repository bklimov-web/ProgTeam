"use client";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "components/shared/ui/dialog";
import DropzoneComponent from "./drag-and-drop";
import { useState } from "react";

interface ImageUploadModalProps {
  onImageUpload: (img: string) => void;
}

const ImageUploadModal = ({ onImageUpload }: ImageUploadModalProps) => {
  const handleDrop = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertToBase64(file);
    console.log(base64);
    //const file = acceptedFile[0];
    //const base64 = await convertToBase64(acceptedFile);
    //onImageUpload(base64);
    //console.log(typeof base64);
    //if (acceptedFile && acceptedFile.length > 0) {
    //  const base64 = await convertToBase64(acceptedFile);
    //  console.log(base64);
    //  onImageUpload(base64);
    //}
  };

  //  const [postImage, setPostImage] = useState({ myFile: "" });

  //  const handleSubmit = (e) => {
  //    e.preventDefault();
  //    //onImageUpload(postImage);
  //    console.log(postImage);
  //    console.log("Uploaded");
  //  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    await onImageUpload({ imageUrl: base64 });
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Image loader</DialogTitle>

        <div className="App">
          <form onSubmit={(e) => handleFileUpload(e)}>
            {/*<label htmlFor="file-upload" className="custom-file-upload">
              <img src={postImage.myFile || undefined} alt="" />
            </label>*/}

            <input
              type="file"
              //  lable="Image"
              name="myFile"
              id="file-upload"
              accept=".jpeg, .png, .jpg"
              onChange={(e) => handleFileUpload(e)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        {/*<Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Drag & drop an image here, or click to select one</p>
              </div>
            )}
            <DragAndDrop />
          </Dropzone>*/}
        {/*<DropzoneComponent handleDrop={handleDrop} />*/}
      </DialogHeader>
    </DialogContent>
  );
};

export default ImageUploadModal;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
