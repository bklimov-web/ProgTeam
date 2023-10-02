"use client";

import { SettingsSidebar } from "components/SettingsSidebar";
import TextBlockForm from "components/TextBlock/TextBlockForm";
import { Button } from "components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  handleDelete: () => void;
  updateBlock: (values: any) => void;
  children: ReactNode;
  content: any;
};

const BlockWrapper = ({
  children,
  handleDelete,
  updateBlock,
  content,
}: Props) => {
  return (
    <div className="relative group align-middle h-[300px] bg-blue-100 w-screen text-center">
      <SettingsSidebar
        content={
          <TextBlockForm updateBlock={updateBlock} defaultValues={content} />
        }
        trigger={
          <Button className="absolute left-[100px] top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Settings
          </Button>
        }
      />

      {children}

      <Button
        onClick={() => handleDelete()}
        className="w-[100px] absolute right-[100px] top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <Trash2 />
      </Button>

      <div className="flex z-10 justify-center items-center border-dashed w-screen border-b-[2px] h-[1px] border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative -top-[1px]">
        <div className="flex justify-center items-center h-[30px] w-[30px] bg-foreground rounded-full">
          <Plus className="text-background cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default BlockWrapper;
