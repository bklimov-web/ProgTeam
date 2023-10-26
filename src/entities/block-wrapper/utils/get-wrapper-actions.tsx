import {
  deleteBlock,
  duplicateBlock,
  toggleDisableBlock,
  moveBlockUp,
  moveBlockDown,
} from "lib/actions/block-actions";
import {
  Trash2,
  Copy,
  Power,
  PowerOff,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

export const getWrapperActions = (
  projectId: string,
  id: string,
  disabled: boolean,
) => [
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
