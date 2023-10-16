import AddProjectForm from "components/home-page/add-project-form";
import ProjectsSection from "components/home-page/projects-section";
import { getProjects, createProject } from "lib/actions/project-actions";

export default async function home() {
  const { projects } = await getProjects();

  return (
<<<<<<< HEAD
    <main
      id="__next"
      data-auto="home"
      className="flex min-h-screen flex-col items-center"
    >
      <HomePage />
=======
    <main data-auto="home" className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-[20px] mt-[200px]">
        <ProjectsSection projects={projects} />

        <AddProjectForm createNewProject={createProject} />
      </div>
>>>>>>> bf43fa3a13034cfef0df22d891967e9766609e50
    </main>
  );
}
