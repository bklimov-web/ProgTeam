import { FC } from "react";
import { getBlock } from "./get-block";
import { BlockWrapper } from "components/block-wrapper";
import { deleteBlock, updateBlock } from "lib/actions/block-actions";

type Props = {
  blocks: any[];
  projectId: string;
  preview?: boolean;
};

const BlocksList: FC<Props> = ({ blocks, projectId, preview = false }) => {
  return (
    <section>
      {blocks.map((block) => {
        const id = block._id.toString();
        const { component, contentSettings, blockSettings } = getBlock(
          block,
          updateBlock(id, block.type),
        );

        if (preview) {
          return component;
        }

        return (
          <BlockWrapper
            key={id}
            handleDelete={deleteBlock(projectId, id)}
            contentSettings={contentSettings}
            blockSettings={blockSettings}
          >
            {component}
          </BlockWrapper>
        );
      })}
    </section>
  );
};

export default BlocksList;
