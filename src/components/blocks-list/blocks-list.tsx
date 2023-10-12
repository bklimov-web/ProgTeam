import { Block } from "@prisma/client";
import TextBlock from "components/blocks/text-block";
import { FC } from "react";

type Props = {
  blocks: Block[];
  projectId: number;
};

const BlocksList: FC<Props> = ({ blocks, projectId }) => {
  console.log(blocks);
  return (
    <section>
      {blocks.map(({ id }) => {
        const content = { id };

        return (
          //  <TextBlock
          //    key={id}
          //    projectId={+projectId}
          //    id={+id}
          //    content={content}
          //  />
          <div> Hello</div>
        );
      })}
    </section>
  );
};

export default BlocksList;
