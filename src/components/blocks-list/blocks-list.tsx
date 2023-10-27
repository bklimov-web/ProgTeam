import { FC } from "react";
import { getBlock } from "./get-block";
import { BlockWrapper } from "components/block-wrapper";
import { updateBlock } from "lib/actions/block-actions";

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
          if (block.disabled) {
            return null;
          }

          return component;
        }

        return (
          <BlockWrapper
            key={id}
            contentSettings={contentSettings}
            blockSettings={blockSettings}
            projectId={projectId}
            id={id}
            disabled={block.disabled}
          >
            {component}
          </BlockWrapper>
        );
      })}
    </section>
  );
};

export default BlocksList;
