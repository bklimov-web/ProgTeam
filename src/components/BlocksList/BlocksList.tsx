import { Block } from "@prisma/client";
import { prisma } from "app/db";
import TextBlock from "components/TextBlock";
import { revalidatePath } from "next/cache";
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

        const handleDelete = async () => {
          "use server";

          await prisma.block.delete({
            where: { id, projectId: projectId },
          });

          revalidatePath(`/project/${projectId}`);
        };

        return <TextBlock key={id} content={content} onDelete={handleDelete} />;
      })}
    </section>
  );
};

export default BlocksList;
