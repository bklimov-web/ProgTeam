"use client";

import { FC } from "react";
import NewBlockSidebar from "./new-block-sidebar";
import NewBlockList from "./new-block-list";

type Props = {
  createBlock: () => any;
};

const NewBlock: FC<Props> = ({ createBlock }) => {
  const handleAddTextBlock = () => {
    createBlock();
  };

  return (
    <div className="flex justify-between gap-5 mt-[80px]">
      <NewBlockSidebar handleClickBlock={handleAddTextBlock} />
      <NewBlockList
        blockVariant="blocks-list"
        handleClickBlock={handleAddTextBlock}
      />
    </div>
  );
};

export default NewBlock;
