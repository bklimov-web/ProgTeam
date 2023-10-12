import React, { FC } from "react";
import { Block } from "@prisma/client";
import BlocksList from "components/blocks-list";
import NewBlock from "components/new-block";
import { apiBaseUrl } from "constants/constants";
import { MoveLeft } from "lucide-react";
import { revalidatePath } from "next/cache";
import Link from "next/link";

import TextBlock from "components/blocks/text-block/text-block";
import ImageBlock from "components/blocks/image-block/image-block";

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

  //  type Props = {
  //    blockType: string | null;
  //  };

  //  const BlockContainer: FC<Props> = ({ blockType }) => {
  //    if (blockType === "text") {
  //      return <TextBlock  />;
  //    } else if (blockType === "images") {
  //      return <ImageBlock />;
  //    } else {
  //      return null; // Можно вернуть что-то другое или ничего, в зависимости от ваших требований
  //    }
  //  };

  return (
    <div data-auto="home" className="flex min-h-screen flex-col items-center">
      <BlocksList blocks={blocks} projectId={+projectId} />

      <NewBlock createBlock={handleAddNewBlock} />

      <Link href="/" className="absolute left-4 top-4">
        <MoveLeft />
      </Link>
    </div>
  );
};

export default Project;
