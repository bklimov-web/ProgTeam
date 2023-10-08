"use client";

import { Button } from "../shared/ui/button";
import { FC } from "react";

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
  handleClickBlock: () => any;
  blockVariant: "blocks-list" | "blocks-list-vertical";
};

const NewBlockList: FC<Props> = ({ handleClickBlock, blockVariant }) => {
  const listClassName = {
    "blocks-list": "flex",
    "blocks-list-vertical": "flex flex-col",
  }[blockVariant];

  return (
    <ul className={listClassName}>
      {BLOCKS.map(({ id, label }) => (
        <li key={id}>
          <Button onClick={handleClickBlock} variant={blockVariant}>
            {label}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default NewBlockList;
