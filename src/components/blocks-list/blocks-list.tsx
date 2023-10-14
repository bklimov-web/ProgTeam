import { ImageBlock } from "components/blocks/image-block";
import TextBlock from "components/blocks/text-block";
import { FC } from "react";

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
        if (block.type === "TextBlockModel") {
          const { title, subtitle, description } = block;

          return (
            <TextBlock
              key={id}
              projectId={projectId}
              id={id}
              title={title}
              description={description}
              subtitle={subtitle}
              preview={preview}
            />
          );
        }

        return (
          <ImageBlock
            projectId={projectId}
            id={id}
            key={id}
            preview={preview}
          />
        );
      })}
    </section>
  );
};

export default BlocksList;
