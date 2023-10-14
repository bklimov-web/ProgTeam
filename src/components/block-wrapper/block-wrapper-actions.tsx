"use client";

import { Button } from "components/shared/ui/button";
import { Trash2 } from "lucide-react";

type Props = {
  handleDelete: () => void;
  handleMoveUp: () => void;
};

const BlockWrapperActions = ({
  handleDelete,
  handleMoveUp,
}: Props) => {
  return (
    <div className="w-[100px] absolute right-[100px] top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <Button
      onClick={() => handleDelete()}
      
    >
      <Trash2 />
    </Button>
    <Button
      onClick={() => handleMoveUp()}
      
    >
      вверх
    </Button>
    </div>
  );
};

export default BlockWrapperActions;
