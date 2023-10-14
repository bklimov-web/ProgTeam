import { FC } from "react";
import BlockWrapper from "components/block-wrapper/block-wrapper";
import { deleteBlock, updateBlock } from "lib/actions/block-actions";

export type TextBlockContentProps = {
  description: string;
  subtitle: string;
  title: string;
};

type Props = {
  description: string;
  subtitle: string;
  title: string;
  id: string;
  projectId: string;
  preview?: boolean;
};

const TextBlock: FC<Props> = ({
  title,
  subtitle,
  description,
  id,
  projectId,
  preview = false,
}) => {
  const content = { title, subtitle, description };

  const Component = () => (
    <div className="flex flex-col justify-center mx-auto w-screen h-full text-center py-10 bg-blue-100">
      <p>{subtitle}</p>
      <h1 className="text-3xl mt-10">{title}</h1>
      <p className="mt-10">{description}</p>
    </div>
  );

  if (preview) {
    return <Component />;
  }

  return (
    <BlockWrapper
      handleDelete={deleteBlock(projectId, id)}
      updateBlock={updateBlock(id, "TextBlockModel")}
      content={content}
    >
      <Component />
    </BlockWrapper>
  );
};

export default TextBlock;
