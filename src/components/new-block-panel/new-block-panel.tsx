"use client";

import { FC } from "react";
import NewBlockPanelSidebar from "./new-block-panel-sidebar";
import NewBlockPanelList from "./new-block-panel-list";

type Props = {
  handleCreateBlock: (blockData: any) => void;
};

const NewBlockPanel: FC<Props> = ({ handleCreateBlock }) => {
  return (
    <div className="flex justify-between gap-5 mt-[80px]">
      <NewBlockPanelSidebar handleClickBlock={handleCreateBlock} />
      <NewBlockPanelList
        blockVariant="blocks-list"
        handleClickBlock={handleCreateBlock}
      />
    </div>
  );
};

export default NewBlockPanel;
