import { Project } from "@prisma/client";
import { apiBaseUrl } from "constants/constants";
import AddProjectForm from "./AddProjectForm";
import ProjectsSection from "./ProjectsSection";
import { prisma } from "app/db";
import { revalidatePath } from "next/cache";

async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${apiBaseUrl}/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function createNewProject(formData: FormData) {
  "use server";
  const name = formData.get("name");

  const res = await fetch(`${apiBaseUrl}/projects`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  revalidatePath("/");
  return res.json();
}

const deleteProject = async (id: number) => {
  "use server";

  await prisma.project.delete({
    where: { id },
  });

  revalidatePath(`/project/${id}`);
};

const HomePage = async () => {
  const projects = await getProjects();

  return (
    <div className="flex flex-col items-center justify-center gap-[20px] mt-[200px]">
      <ProjectsSection onDelete={deleteProject} projects={projects} />

      <AddProjectForm createNewProject={createNewProject} />
    </div>
  );
};

export default HomePage;
