import { Block } from "@prisma/client";
import { prisma } from "app/db";
import Screen from "components/Screen/Screen";
import TextBlock from "components/TextBlock/TextBlock";
import { apiBaseUrl } from "constants/constants";
import { MoveLeft } from "lucide-react";
import { revalidatePath } from "next/cache";
import Link from "next/link";

async function getBlocks(projectId: string): Promise<Block[]> {
  "use server";
  const res = await fetch(`${apiBaseUrl}/blocks?projectId=${projectId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const createNewBlock = async (projectId: number) => {
  "use server";
  const res = await fetch(`${apiBaseUrl}/blocks?projectId=${projectId}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ projectId }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  revalidatePath(`/project/${projectId}`);
  return res.json();
};

const Project = async ({
  params: { projectId },
}: {
  params: { projectId: string };
}) => {
  const blocks = await getBlocks(projectId);

  const handleAddNewBlock = async () => {
    "use server";
    await createNewBlock(+projectId);
  };

  return (
    <div data-auto="home" className="flex min-h-screen flex-col items-center">
      <Link href="/" className="absolute left-4 top-4">
        <MoveLeft />
      </Link>

      {blocks.map(({ description, title, subtitle, id }) => {
        const content = { description, subtitle, title, id };

        const handleDelete = async () => {
          "use server";

          await prisma.block.delete({
            where: { id, projectId: +projectId },
          });

          revalidatePath(`/project/${projectId}`);
        };

        return <TextBlock key={id} content={content} onDelete={handleDelete} />;
      })}

      <Screen createBlock={handleAddNewBlock} />
    </div>
  );
};

export default Project;
