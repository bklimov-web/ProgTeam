import { BlockWrapper } from "components/block-wrapper";
import { deleteBlock, updateBlock } from "lib/actions/block-actions";
import { FC } from "react";

type Props = { id: string; projectId: string; preview?: boolean };

const ImageBlock: FC<Props> = ({ id, projectId, preview = false }) => {
  const Component = () => (
    <div className="w-screen text-center py-9 bg-red-100">Image block</div>
  );

  if (preview) {
    return <Component />;
  }

  return (
    <BlockWrapper
      handleDelete={deleteBlock(projectId, id)}
      updateBlock={updateBlock(id, "ImageBlockModel")}
      content={{}}
    >
      <Component />
    </BlockWrapper>
  );
};

export default ImageBlock;
