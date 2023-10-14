import { BlockWrapper } from "components/block-wrapper";
import { deleteBlock, moveBlockUp, updateBlock } from "lib/actions/block-actions";

const ImageBlock = ({ id, projectId }: { id: string; projectId: string }) => {
  const handleDelete = async () => {
    "use server";
    await deleteBlock(projectId, id);
  };

  const handleUpdate = async (values: any) => {
    "use server";
    await updateBlock(id, values, "ImageBlockModel");
  };

  const handleMoveUp = async () => {
    "use server";
    await moveBlockUp(projectId, id);
  };

  return (
    <BlockWrapper
      handleDelete={handleDelete}
      updateBlock={handleUpdate}
      handleMoveUp={handleMoveUp}
      content={{}}
      className="text-center py-9 bg-red-100"
    >
      <div>Image block</div>
    </BlockWrapper>
  );
};

export default ImageBlock;
