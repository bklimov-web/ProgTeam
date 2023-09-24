"use client";

import { Button } from "../ui/button";
import { Dispatch, FC, SetStateAction } from "react";
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

type Props = {
  addComponents?: Dispatch<SetStateAction<any[]>>;
  createBlock: () => any;
};

const BlocksList: FC<Props> = ({ createBlock, addComponents }) => {
  const handleClickAll = () => undefined;

  const handleAddTextBlock = () => {
    createBlock();
  };

  return (
    <>
      <div className="flex justify-between gap-5 mt-[80px]">
        <Button onClick={handleClickAll}>
          <Menu className="pr-2" />
          All blocks
        </Button>

        <ul className="flex">
          {BLOCKS.map(({ id, label, onClick }) => (
            <Button
              onClick={handleAddTextBlock}
              variant={"blocks-list"}
              key={id}
            >
              {label}
            </Button>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlocksList;
