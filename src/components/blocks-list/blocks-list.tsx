import { ImageBlock } from "components/blocks/image-block";
import TextBlock from "components/blocks/text-block";
import { FC } from "react";

type Props = {
  blocks: any[];
  projectId: string;
};

const BlocksList: FC<Props> = ({ blocks, projectId }) => {
  console.log(blocks);
  return (
    <section>
<<<<<<< HEAD
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
=======
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
            />
          );
        }

        return <ImageBlock projectId={projectId} id={id} key={id} />;
>>>>>>> bf43fa3a13034cfef0df22d891967e9766609e50
      })}
    </section>
  );
};

export default BlocksList;
