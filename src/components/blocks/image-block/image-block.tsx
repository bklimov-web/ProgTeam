import { BlockWrapper } from "components/block-wrapper";
import {
  deleteBlock,
  duplicateBlock,
  moveBlockDown,
  moveBlockUp,
  updateBlock,
} from "lib/actions/block-actions";

const ImageBlock = ({ id, projectId }: { id: string; projectId: string }) => {
  const handleDelete = async () => {
    "use server";
    await deleteBlock(projectId, id);
  };

  const handleUpdate = async (values: any) => {
    "use server";
    await updateBlock(id, values, "ImageBlockModel");
  };

  const handleDuplicate = async () => {
    "use server";
    await duplicateBlock(projectId, id);
  };

  const handleMoveUp = async () => {
    "use server";
    await moveBlockUp(projectId, id);
  };

  const handleMoveDown = async () => {
    "use server";
    await moveBlockDown(projectId, id);
  };

  return (
    <BlockWrapper
      handleDelete={handleDelete}
      updateBlock={handleUpdate}
      handleDuplicate={handleDuplicate}
      handleMoveUp={handleMoveUp}
      handleMoveDown={handleMoveDown}
      content={{}}
      className="text-center py-9 bg-red-100"
    >
      <div>Image block</div>
    </BlockWrapper>
  );
};

export default ImageBlock;
