import { auth } from "@clerk/nextjs";
import AddProjectForm from "components/home-page/add-project-form";
import ProjectsSection from "components/home-page/projects-section";
import { getProjects, createProject } from "lib/actions/project-actions";

export default async function home() {
  const { projects } = await getProjects();
  const { userId } = auth();

  // const mongoUser = await getUserById({ userId });
  const mongoUser = "652c704391bd4b0609d33f81";

  const handleCreateProject = async (formData: FormData) => {
    "use server";
    await createProject(formData, mongoUser);
  };

  return (
    <main data-auto="home" className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-[20px] mt-[200px]">
        <ProjectsSection projects={projects} />

        <AddProjectForm createNewProject={handleCreateProject} />
      </div>
    </main>
  );
}
