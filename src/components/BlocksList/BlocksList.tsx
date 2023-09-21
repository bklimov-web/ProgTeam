"use client";

import { Button } from "../ui/button";
import { FC } from "react";
import { Menu } from "lucide-react";

const BLOCKS = [
  {
    id: "text",
    label: "Text",
    onClick: () => undefined,
  },
  {
    id: "images",
    label: "Images",
    onClick: () => undefined,
  },
  {
    id: "other",
    label: "Other",
    onClick: () => undefined,
  },
];

const BlocksList: FC = () => {
  const handleClickAll = () => undefined;

  return (
    <div className="flex justify-between gap-5">
      <Button onClick={handleClickAll}>
        <Menu className="pr-2" />
        All blocks
      </Button>
      <ul className="flex">
        {BLOCKS.map(({ id, label, onClick }) => (
          <Button onClick={onClick} variant={"blocks-list"} key={id}>
            {label}
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default BlocksList;
