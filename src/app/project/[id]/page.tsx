import { prisma } from "app/db";
import Screen from "components/Screen/Screen";
import TextBlock from "components/TextBlock/TextBlock";
import { revalidatePath } from "next/cache";

async function getBlocks(id: string) {
  const res = await fetch(`http://localhost:3000/api/blocks?id=${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Project = async ({ params }: { params: { id: string } }) => {
  const createNewBlock = async () => {
    "use server";
    await prisma.block.create({
      data: {
        description: "descr",
        title: "TITLE-NEW",
        subtitle: "subtitle",
        projectId: +params.id,
      },
    });
    revalidatePath(`/project/${params.id}`);
  };

  const blocks = await getBlocks(params.id);

  return (
    <div data-auto="home" className="flex min-h-screen flex-col items-center">
      {blocks.map(({ description, title, subtitle, id }) => {
        const content = { description, subtitle, title, id };

        const handleDelete = async () => {
          "use server";

          const blocks2 = await prisma.block.delete({
            where: { id, projectId: +params.id },
          });
          console.log(blocks2);

          revalidatePath(`/project/${params.id}`);
        };

        return <TextBlock key={id} content={content} onDelete={handleDelete} />;
      })}
      <Screen createBlock={createNewBlock} />
    </div>
  );
};

export default Project;
