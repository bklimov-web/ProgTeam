import { Sidebar } from "shared/sidebar";
import { Button } from "shared/component-library/button";
import { Plus } from "lucide-react";
import { ReactNode } from "react";
import ActionsPanel from "./actions-panel";
import PlugBlock from "entities/plug-block";
import { getWrapperActions } from "../utils/get-wrapper-actions";

type Props = {
  projectId: string;
  id: string;
  disabled: boolean;
  children: ReactNode;
  content: any;
  className?: string;
};

const BlockWrapper = ({
  children,
  id,
  projectId,
  content,
  className,
  disabled,
}: Props) => {
  return (
    <div
      className={`relative group align-middle h-fit w-screen ${
        disabled ? "" : className
      }`}
    >
      {!disabled && (
        <Sidebar
          content={content}
          trigger={
            <Button className="absolute left-[100px] top-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Settings
            </Button>
          }
        />
      )}

      <ActionsPanel
        wrapperActions={getWrapperActions(projectId, id, disabled)}
      />

      {disabled ? PlugBlock() : children}

      <div className="flex absolute -bottom-[1px] left-0 z-10 justify-center items-center border-dashed w-screen border-b-[2px] h-[1px] border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex justify-center items-center h-[30px] w-[30px] bg-foreground rounded-full">
          <Plus className="text-background cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default BlockWrapper;
