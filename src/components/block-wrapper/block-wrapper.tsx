"use client";

import { Sidebar } from "components/shared/sidebar";
import TextBlockForm from "components/blocks/text-block/text-block-form";
import PlugBlock from "components/blocks/plug-block";
import BlockWrapperActions from "./block-wrapper-actions";
import { Button } from "components/shared/ui/button";
import { Plus } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  handleDelete: () => void;
  handleMoveUp: () => void;
  handleMoveDown: () => void;
  handleDuplicate: () => void;
  handleToggleDisable: () => void;
  updateBlock: (values: any) => void;
  children: ReactNode;
  content: any;
  className?: string;
};

const BlockWrapper = ({
  children,
  handleDelete,
  handleMoveUp,
  handleMoveDown,
  handleDuplicate,
  handleToggleDisable,
  updateBlock,
  content,
  className,
}: Props) => {
  const { disabled } = content;
  
  return (
    <div className={`relative group align-middle h-fit w-screen ${disabled ? '' :  className}`}>
      {!disabled && (
        <Sidebar
          content={
            <TextBlockForm updateBlock={updateBlock} defaultValues={content} />
          }
          trigger={
            <Button className="absolute left-[100px] top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Settings
            </Button>
          }
        />
      )}

      {content.disabled ? PlugBlock() : children}

      <BlockWrapperActions
        disabled={disabled}
        handleDelete={handleDelete}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
        handleDuplicate={handleDuplicate}
        handleToggleDisable={handleToggleDisable}
      />

      <div className="flex absolute -bottom-[1px] left-0 z-10 justify-center items-center border-dashed w-screen border-b-[2px] h-[1px] border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex justify-center items-center h-[30px] w-[30px] bg-foreground rounded-full">
          <Plus className="text-background cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default BlockWrapper;
