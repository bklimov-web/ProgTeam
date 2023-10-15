"use server";

import { connectToDatabase } from "lib/mongoose";
import { revalidatePath } from "next/cache";
import { BlockModel, ProjectModel } from "database/project.model";

export async function getProjects() {
  try {
    connectToDatabase();

    const projects = await ProjectModel.find({});

    return { projects };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProjectById(id: string) {
  try {
    connectToDatabase();

    const project = ProjectModel.findOne({ _id: id }).populate({
      path: "blocks",
      model: BlockModel,
    });

    return project;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const createProject = async (formData: FormData, author: string) => {
  try {
    connectToDatabase();
    const name = formData.get("name")?.toString();

    await ProjectModel.create({
      name,
      author,
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteProject = async (id: string) => {
  try {
    const project = await ProjectModel.findOneAndDelete({ _id: id });

    await BlockModel.deleteMany({ projectId: project._id });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
