import BlocksList from "components/blocks-list";
import { getProjectById } from "lib/actions/project-actions";

const Page = async ({
  params: { projectId },
}: {
  params: { projectId: string };
}) => {
  const project = await getProjectById(projectId);

  if (!project.isPublished) {
    return "There's no published page on this url";
  }

  return (
    <div data-auto="home" className="flex min-h-screen flex-col items-center">
      <BlocksList blocks={project.blocks} projectId={projectId} preview />
    </div>
  );
};

export default Page;
