import BlocksList from "components/blocks-list";
import NewBlockPanel from "components/new-block-panel";
import { PublishButton } from "components/shared/publish-button";
import { createBlock } from "lib/actions/block-actions";
import { getProjectById, updateProject } from "lib/actions/project-actions";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const Project = async ({
  params: { projectId },
}: {
  params: { projectId: string };
}) => {
  const project = await getProjectById(projectId);

  const isPublished = project.isPublished;

  const handleCreateBlock = async (blockData: any) => {
    "use server";
    await createBlock(projectId, blockData);
  };

  const handleUpdateProject = async (data: any) => {
    "use server";

    await updateProject(projectId, data);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <PublishButton
        isPublished={isPublished}
        updateProject={handleUpdateProject}
      />

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
