"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropzoneComponent = ({
  handleDrop,
}: {
  handleDrop: (value: any) => void;
}) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log("Accepted files:", acceptedFiles);
    handleDrop(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="w-48 h-48 border-2 border-gray-600 border-dashed rounded-md flex justify-center items-center text-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <span>Drop the files here ...</span>
      ) : (
        <span>Drag 'n' drop some files here, or click to select files</span>
      )}
    </div>
  );
};

export default DropzoneComponent;
