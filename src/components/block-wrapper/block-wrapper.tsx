"use client";

import { Sidebar } from "components/shared/sidebar";
import { Button } from "components/shared/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  handleDelete: () => void;
  children: ReactNode;
  contentSettings: any;
  blockSettings: any;
  className?: string;
};

const BlockWrapper = ({
  children,
  handleDelete,
  contentSettings,
  blockSettings,
  className,
}: Props) => {
  return (
    <div className={`relative group align-middle h-fit w-screen ${className}`}>
      <Sidebar
        content={contentSettings}
        trigger={
          <Button className="absolute left-[100px] top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Content Settings
          </Button>
        }
      />

      <Sidebar
        content={blockSettings}
        trigger={
          <Button className="absolute left-[260px] top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Block Settings
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

      <div className="flex absolute -bottom-[1px] left-0 z-10 justify-center items-center border-dashed w-screen border-b-[2px] h-[1px] border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex justify-center items-center h-[30px] w-[30px] bg-foreground rounded-full">
          <Plus className="text-background cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default BlockWrapper;
