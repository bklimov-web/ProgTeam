"use client";

import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { getSignature, saveToDatabase } from "../../../_actions";

const DropzoneComponent = ({
  handleDrop,
  selectedFile,
  setSelectedFile,
}: {
  handleDrop: (value: any) => void;
  selectedFile: any;
  setSelectedFile: (value: any) => void;
}) => {
  //  const onDrop = useCallback((acceptedFiles: any) => {
  //    handleDrop(acceptedFiles);
  //    setSelectedFile(URL.createObjectURL(acceptedFiles[0]));
  //  }, []);

  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev: File[]) => [...prev, ...acceptedFiles]);
    setSelectedFile(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
    maxFiles: 1,
    onDrop,
  });

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  async function action() {
    const file = files[0];
    if (!file) return;

    // get a signature using server action
    const { timestamp, signature } = await getSignature();

    // upload to cloudinary using the signature
    const formData = new FormData();

    formData.append("file", file);
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
    formData.append("signature", signature);
    formData.append("timestamp", timestamp);
    formData.append("folder", "prog-team");

    const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL;
    const data = await fetch(endpoint, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    // write to database using server actions
    await saveToDatabase({
      version: data?.version,
      signature: data?.signature,
      public_id: data?.public_id,
      image: data,
    });

    console.log(data);
  }

  //  async function handleUpload() {
  //    if (!files.length) return alert("No files are selected");

  //    const formData = new FormData();

  //    files.forEach((file) => {
  //      formData.append("files", file);
  //    });

  //    await uploadPhoto(formData);
  //  }

  return (
    <form action={action}>
      <div
        {...getRootProps()}
        className="w-[100%] h-[50vh] border-2 border-gray-600 border-dashed cursor-pointer rounded-md flex justify-center items-center text-center"
      >
        <input {...getInputProps()} />
        {selectedFile ? (
          <>
            <img
              src={selectedFile}
              alt="preview"
              className="w-[100%] h-[100%] object-cover"
            />
          </>
        ) : isDragActive ? (
          <span>Drop the files here ...</span>
        ) : (
          <span>Drag 'n' drop some files here, or click to select files</span>
        )}
      </div>
      <button
        type="submit"
        className="ml-auto mt-1 rounded-md border border-purple-400 px-3 text-[12px] font-bold uppercase tracking-wider text-stone-500 transition-colors hover:bg-purple-400 hover:text-white"
      >
        Upload to Cloudinary
      </button>
    </form>
  );
};

export default DropzoneComponent;
