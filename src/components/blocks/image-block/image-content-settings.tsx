"use client";
import { useState, useRef } from "react";

import { Button } from "components/shared/ui/button";
import { Input } from "components/shared/ui/input";
import { Label } from "components/shared/ui/label";
import { Trash2 } from "lucide-react";

import { convertToBase64 } from "../../../lib/utils";
import { ImageContentProps, img } from "./types";

const ImageContentSettings = ({ data, updateBlock }: ImageContentProps) => {
  const defaultContent = data;
  const [content, setContent] = useState(data);
  const fileInput = useRef(null);

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    imageId: string
  ) => {
    const { value } = e.target;
    const updatedContent = content.map((image) => {
      if (image._id === imageId) {
        return { ...image, title: value };
      }
      return image;
    });

    setContent(updatedContent);
  };

  const onSubmit = () => {
    updateBlock({ content: { images: content } });
  };

  const onCancel = () => {
    updateBlock({ content: { images: defaultContent } });
  };

  const deleteImage = (id: string) => {
    const updatedContent = content.filter((image) => image._id !== id);
    console.log(updatedContent);
    setContent(updatedContent);
  };

  const addImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    const updatedContent: any = [
      ...content,
      {
        imageUrl: base64,
        title: "Image",
        alt: "image",
      },
    ];

    setContent(updatedContent);
  };

  return (
    <div className="flex flex-col gap-10 justify-center">
      {content != undefined &&
        content.map((image) => {
          return (
            <div key={image._id} className="flex gap-5 items-center">
              <div className="w-[150px] h-auto">
                <img src={image.imageUrl} />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  value={image.title}
                  onChange={(e) => handleInputChange(e, image._id)}
                />
              </div>
              <div>
                <Trash2 onClick={() => deleteImage(image._id)} />
              </div>
            </div>
          );
        })}
      <div>
        <Button className="w-[200px]" onClick={handleButtonClick}>
          Add photo
        </Button>
        <input
          type="file"
          id="file-upload"
          ref={fileInput}
          style={{ display: "none" }}
          accept=".jpeg, .png, .jpg"
          onChange={(e) => addImage(e)}
        />
      </div>
      <div className="flex justify-around">
        <Button className="w-[150px]" onClick={onSubmit}>
          Save
        </Button>
        <Button className="w-[150px]" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ImageContentSettings;
