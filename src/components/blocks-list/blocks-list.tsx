import { ImageBlock } from "components/blocks/image-block";
import TextBlock from "components/blocks/text-block";
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
        console.log(getBlock(block));

        if (block.type === "TextBlockModel") {
          const { title, subtitle, description } = block;

          return (
            <BlockWrapper
              key={id}
              handleDelete={deleteBlock(projectId, id)}
              updateBlock={updateBlock(id, block.type)}
              content={{ title, subtitle, description }}
            >
              <TextBlock
                title={title}
                description={description}
                subtitle={subtitle}
              />
            </BlockWrapper>
          );
        }

        return (
          <BlockWrapper
            key={id}
            handleDelete={deleteBlock(projectId, id)}
            updateBlock={updateBlock(id, block.type)}
            content={{}}
          >
            <ImageBlock />
          </BlockWrapper>
        );
      })}
    </section>
  );
};

export default BlocksList;
