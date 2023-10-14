"use client";

import { Button } from "../shared/ui/button";
import { FC } from "react";

const BLOCKS = [
  {
    id: "text",
    label: "Text",
    blockData: {
      type: "TextBlockModel",
      description: "Description",
      title: "Title",
      subtitle: "Subtitle",
    },
  },
  {
    id: "images",
    label: "Images",
    blockData: {
      type: "ImageBlockModel",
      imageUrls: ["img1", "img2"],
    },
  },
  // {
  //   id: "other",
  //   label: "Other",
  //   onClick: () => undefined,
  // },
];

type Props = {
  handleClickBlock: (blockData: any) => any;
  blockVariant: "blocks-list" | "blocks-list-vertical";
};

const NewBlockList: FC<Props> = ({ handleClickBlock, blockVariant }) => {
  const listClassName = {
    "blocks-list": "flex",
    "blocks-list-vertical": "flex flex-col",
  }[blockVariant];

  return (
    <ul className={listClassName}>
      {BLOCKS.map(({ id, label, blockData }) => (
        <li key={id}>
          <Button onClick={() => handleClickBlock(blockData)} variant={blockVariant}>
            {label}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default NewBlockList;
