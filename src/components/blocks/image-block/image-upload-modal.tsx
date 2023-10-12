// components/ImageUploadModal.js
import React from "react";
import Dropzone from "react-dropzone";
import Modal from "react-modal";

Modal.setAppElement("#__next");

interface ImageUploadModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onImageUpload: (img: string) => void;
}

const ImageUploadModal = ({
  isOpen,
  onRequestClose,
  onImageUpload,
}: ImageUploadModalProps) => {
  const handleDrop = (acceptedFiles: any) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      onImageUpload(acceptedFiles[0]);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Upload Modal"
      //  className="w-[500px] h-[500px]"
    >
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag & drop an image here, or click to select one</p>
          </div>
        )}
      </Dropzone>
    </Modal>
  );
};

export default ImageUploadModal;
