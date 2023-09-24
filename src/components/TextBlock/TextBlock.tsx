"use client";
import { Button } from "components/ui/button";
import { FC } from "react";

type Props = {
  content: {
    description: string;
    subtitle: string;
    title: string;
  };
  onDelete: () => void;
};

const TextBlock: FC<Props> = ({ content, onDelete }) => {
  const { description, title, subtitle } = content;

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="align-middle h-[300px] bg-blue-100 w-screen">
      <div className="flex flex-col justify-center mx-auto w-[1200px] h-full">
        <h3 className="text-center">{subtitle}</h3>
        <h1 className="text-center text-3xl mt-10">{title}</h1>
        <p className="text-center mt-10">{description}</p>
        <Button onClick={handleDelete} className="w-[100px]">
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default TextBlock;
