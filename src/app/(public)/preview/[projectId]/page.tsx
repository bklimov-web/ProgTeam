import BlocksList from "components/blocks-list";
import { getProjectById } from "lib/actions/project-actions";

const Page = async ({
  params: { projectId },
}: {
  params: { projectId: string };
}) => {
  const { blocks } = await getProjectById(projectId);

  return (
    <div data-auto="home" className="flex min-h-screen flex-col items-center">
      <BlocksList blocks={blocks} projectId={projectId} preview />
    </div>
  );
};

export default Page;
