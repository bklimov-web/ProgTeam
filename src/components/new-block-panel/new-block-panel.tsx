"use client";

import { FC } from "react";
import NewBlockSidebar from "./new-block-sidebar";
import NewBlockList from "./new-block-list";

type Props = {
  handleCreateBlock: (blockData: any) => void;
};

const NewBlockPanel: FC<Props> = ({ handleCreateBlock }) => {
  return (
    <div className="flex justify-between gap-5 mt-[80px]">
      <NewBlockSidebar handleClickBlock={handleCreateBlock} />
      <NewBlockList
        blockVariant="blocks-list"
        handleClickBlock={handleCreateBlock}
      />
    </div>
  );
};

export default NewBlockPanel;
