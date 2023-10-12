import BlocksList from "components/blocks-list";
import NewBlockPanel from "components/new-block-panel";
import { createBlock } from "lib/actions/block-actions";
import { getProjectById } from "lib/actions/project-actions";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const Project = async ({
  params: { projectId },
}: {
  params: { projectId: string };
}) => {
  const { blocks } = await getProjectById(projectId);

  const handleCreateBlock = async (blockData: any) => {
    "use server";
    await createBlock(projectId, blockData);
  };

  return (
    <div data-auto="home" className="flex min-h-screen flex-col items-center">
      <BlocksList blocks={blocks} projectId={projectId} />

      <NewBlockPanel handleCreateBlock={handleCreateBlock} />

      <Link href="/" className="absolute left-4 top-4">
        <MoveLeft />
      </Link>
    </div>
  );
};

export default Project;
