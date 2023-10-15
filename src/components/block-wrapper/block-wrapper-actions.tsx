"use client";

import { Button } from "components/shared/ui/button";
import { Trash2, ArrowDown, ArrowUp, Copy } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  handleDelete: () => void;
  handleDuplicate: () => void;
  handleMoveUp: () => void;
  handleMoveDown: () => void;
};

const BlockWrapperActions = ({
  handleDelete,
  handleDuplicate,
  handleMoveUp,
  handleMoveDown,
}: Props) => {
  const actions = [
    {
      Icon: Trash2,
      handler: () => handleDelete(),
      key: "delete",
    },
    {
      Icon: Copy,
      handler: () => handleDuplicate(),
      key: "duplicate",
    },
    {
      Icon: ArrowUp,
      handler: () => handleMoveUp(),
      key: "moveUp",
    },
    {
      Icon: ArrowDown,
      handler: () => handleMoveDown(),
      key: "moveDown",
    },
  ];

  return (
    <div className="absolute right-[100px] flex space-x-2 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {actions.map(({ key, Icon, handler }) => (
        <Button onClick={handler} key={key}>
          <Icon />
        </Button>
      ))}
    </div>
  );
};

export default BlockWrapperActions;
