import { SignedIn, SignedOut, auth } from "@clerk/nextjs";
import AddProjectForm from "components/home-page/add-project-form";
import ProjectsSection from "components/home-page/projects-section";
import { createProject, getProjects } from "lib/actions/project-actions";
import { getUserById } from "lib/actions/user-actions";

export default async function home() {
  const { userId } = auth();

  const mongoUser = await getUserById({ userId });
  const id = mongoUser?._id.toString();

  const { projects } = await getProjects(id);

  const handleCreateProject = async (formData: FormData) => {
    "use server";
    if (id) {
      await createProject(formData, id);
    }
  };

  return (
    <main data-auto="home" className="flex min-h-screen flex-col items-center">
      <SignedIn>
        <div className="flex flex-col items-center justify-center gap-[20px] mt-[200px]">
          <ProjectsSection projects={projects} userId={id} />

          <AddProjectForm createNewProject={handleCreateProject} />
        </div>
      </SignedIn>

      <SignedOut>
        <h1 className="mt-20 font-bold text-[30px]">
          Log In to see and create projects
        </h1>
      </SignedOut>
    </main>
  );
}
