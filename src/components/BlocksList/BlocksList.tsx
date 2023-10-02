import { Block } from "@prisma/client";
import TextBlock from "components/TextBlock";
import { FC } from "react";

type Props = {
  blocks: Block[];
  projectId: number;
};

const BlocksList: FC<Props> = ({ blocks, projectId }) => {
  return (
    <section>
      {blocks.map(({ description, title, subtitle, id }) => {
        const content = { description, subtitle, title, id };

        return (
          <TextBlock
            key={id}
            projectId={+projectId}
            id={+id}
            content={content}
          />
        );
      })}
    </section>
  );
};

export default BlocksList;
