import { Sidebar } from "components/shared/sidebar";
import { Button } from "components/shared/ui/button";
import {
  ArrowDown,
  ArrowUp,
  Copy,
  Plus,
  Power,
  PowerOff,
  Trash2,
} from "lucide-react";
import { ReactNode } from "react";
import ActionsPanel from "./actions-panel";
import {
  deleteBlock,
  duplicateBlock,
  moveBlockDown,
  moveBlockUp,
  toggleDisableBlock,
} from "lib/actions/block-actions";
import PlugBlock from "components/blocks/plug-block";

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
  const wrapperActions = [
    {
      Icon: <Trash2 />,
      handler: deleteBlock(projectId, id),
      key: "delete",
    },
    {
      Icon: <Copy />,
      handler: duplicateBlock(projectId, id),
      key: "duplicate",
    },
    {
      Icon: disabled ? <Power /> : <PowerOff />,
      handler: toggleDisableBlock(id),
      key: "toggleDisable",
    },
    {
      Icon: <ArrowUp />,
      handler: moveBlockUp(projectId, id),
      key: "moveUp",
    },
    {
      Icon: <ArrowDown />,
      handler: moveBlockDown(projectId, id),
      key: "moveDown",
    },
  ];

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

      <ActionsPanel wrapperActions={wrapperActions} />

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
