"use client";

import { DialogHeader, DialogTitle } from "components/shared/ui/dialog";
import { FormEvent, useState } from "react";
import { convertToBase64 } from "lib/utils";
import { ImageUploadModalProps, img } from "./types";
import DropzoneComponent from "./drag-and-drop";
import { Button } from "components/shared/ui/button";

type typesImg = {
  images: img[];
  id: string;
  newSrc: string;
};

const ImageUploadModal = ({
  updateBlock,
  id,
  images,
}: ImageUploadModalProps) => {
  const [newImageUrl, setNewImageUrl] = useState<img[] | null>();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = async () => {
    //updateBlock({ content: { images: newImageUrl } });
    console.log(newImageUrl);
  };

  const updateSrcById = (images, id, newSrc) => {
    return images.map((image) => {
      if (image._id === id) {
        return { ...image, imageUrl: newSrc };
      }
      return image;
    });
  };

  const handleFileUpload = async (file: any) => {
    const base64 = await convertToBase64(file[0]);
    const updatedImages = updateSrcById(images, id, base64);
    setNewImageUrl(updatedImages);
  };

  return (
    <DialogHeader>
      <DialogTitle>Image loader</DialogTitle>
      <DropzoneComponent
        handleDrop={handleFileUpload}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      {selectedFile && (
        <Button onClick={handleDrop} className="w-[200px] m-auto mt-20px">
          Save
        </Button>
      )}
    </DialogHeader>
  );
};

export default ImageUploadModal;
