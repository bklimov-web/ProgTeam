"use client";

import { Sidebar } from "components/shared/sidebar";
import { useState } from "react";
import { Button } from "components/shared/ui/button";
import { Input } from "components/shared/ui/input";
import { Label } from "components/shared/ui/label";
import { Trash2 } from "lucide-react";

type img = {
  id: number;
  alt: string;
  title: string;
  src: string;
};
type ImageProps = {
  data: img[];
  styles?: {};
};

const ImageContentSettings = ({ data }: ImageProps) => {
  console.log(data);
  return (
    <div className="flex flex-col gap-10 justify-center">
      {data != undefined &&
        data.map((image) => {
          return (
            <div className="flex gap-5 items-center">
              <div className="w-[150px] h-auto">
                <img src={image.src} />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="title">Title</Label>
                <Input id="title" type="text" value={image.title} />
              </div>
              <div>
                <Trash2 />
              </div>
            </div>
          );
        })}
      <Button className="w-[200px]">Add photo</Button>
      <Button className="w-[200px]">Save</Button>
    </div>
  );
};

export default ImageContentSettings;
