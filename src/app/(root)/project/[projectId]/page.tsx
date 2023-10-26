import BlocksList from "widgets/blocks-list";
import NewBlockPanel from "widgets/new-block-panel";
import { createBlock } from "lib/actions/block-actions";
import { getProjectById } from "lib/actions/project-actions";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const Project = async ({
  params: { projectId },
}: {
  params: { projectId: string };
}) => {
  const project = await getProjectById(projectId);

  const handleCreateBlock = async (blockData: any) => {
    "use server";
    await createBlock(projectId, blockData);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center">
      {project?.blocks && (
        <BlocksList blocks={project.blocks} projectId={projectId} />
      )}

      <NewBlockPanel handleCreateBlock={handleCreateBlock} />

      <Link href="/" className="absolute left-4 top-4">
        <MoveLeft />
      </Link>
    </main>
  );
};

export default Project;
