import { BlockWrapper } from "components/block-wrapper";
import { deleteBlock, updateBlock } from "lib/actions/block-actions";

const ImageBlock = ({ id, projectId }: { id: string; projectId: string }) => {
  const handleDelete = async () => {
    "use server";
    await deleteBlock(projectId, id);
  };

  const handleUpdate = async (values: any) => {
    "use server";
    await updateBlock(id, values, "ImageBlockModel");
  };

  return (
    <BlockWrapper
      handleDelete={handleDelete}
      updateBlock={handleUpdate}
      content={{}}
      className="text-center py-9 bg-red-100"
    >
      <div>Image block</div>
    </BlockWrapper>
  );
};

export default ImageBlock;
