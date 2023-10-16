import React from "react";
import Dropzone from "react-dropzone";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "components/shared/ui/dialog";
import DragAndDrop from "./drag-and-drop";
import DropzoneComponent from "./drag-and-drop";

interface ImageUploadModalProps {
  onImageUpload: (img: string) => void;
}

const ImageUploadModal = ({ onImageUpload }: ImageUploadModalProps) => {
  const handleDrop = (acceptedFiles: any) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      onImageUpload(acceptedFiles);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Image loader</DialogTitle>
        <DialogDescription>
          {/*<Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Drag & drop an image here, or click to select one</p>
              </div>
            )}
            <DragAndDrop />
          </Dropzone>*/}
          <DropzoneComponent handleDrop={handleDrop} />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default ImageUploadModal;
