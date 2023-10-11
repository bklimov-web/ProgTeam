import TextBlock from "components/blocks/text-block";
import { FC } from "react";

type Props = {
  blocks: any[];
  projectId: string;
};

const BlocksList: FC<Props> = ({ blocks, projectId }) => {
  return (
    <section>
      {blocks.map((block) => {
        if (block.type === "TextBlockModel") {
          const { _id, title, subtitle, description } = block;

          const id = _id.toString();

          return (
            <TextBlock
              key={id}
              projectId={projectId}
              id={id}
              title={title}
              description={description}
              subtitle={subtitle}
            />
          );
        }

        return (
          <div
            className="text-center p-20 bg-red-100"
            key={block._id.toString()}
          >
            Image block
          </div>
        );
      })}
    </section>
  );
};

export default BlocksList;
