import { FC } from "react";
import BlockWrapper from "components/block-wrapper/block-wrapper";
import { deleteBlock, updateBlock } from "./actions";
import Editor from "components/Editor";

export type TextBlockContentProps = {
  description: string;
  subtitle: string;
  title: string;
};

type Props = {
  content: TextBlockContentProps;
  id: number;
  projectId: number;
  // Editor: JSX.Element
};

const TextBlock: FC<Props> = ({ content, id, projectId }) => {
  const { description, title, subtitle } = content;

  const handleDelete = async () => {
    "use server";
    await deleteBlock(id, projectId);
  };

  const handleUpdate = async (values: any) => {
    "use server";
    await updateBlock(values, id, projectId);
  };

  return (
    <BlockWrapper
      handleDelete={handleDelete}
      updateBlock={handleUpdate}
      content={content}
    >
      <div className="flex flex-col justify-center mx-auto w-[1200px] h-full">
        <p className="text-center text-3xl"><Editor content={subtitle}/></p>
        <h1 className="text-3xl mt-10"><Editor content={title}/></h1>
        <p className="mt-10"><Editor content={description}/></p>
      </div>
    </BlockWrapper>
  );
};

export default TextBlock;
