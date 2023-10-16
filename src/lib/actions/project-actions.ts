"use server";

import { connectToDatabase } from "lib/mongoose";
import { revalidatePath } from "next/cache";
import { BlockModel, ProjectModel } from "database/project.model";
import User from "database/user.model";

export async function getProjects(userId: string) {
  try {
    connectToDatabase();

    const projects = await ProjectModel.find({ author: userId });

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

export const createProject = async (formData: FormData, authorId: string) => {
  try {
    connectToDatabase();
    const name = formData.get("name")?.toString();

    const project = await ProjectModel.create({
      name,
      author: authorId,
    });

    await User.findByIdAndUpdate(authorId, {
      $push: { projects: project._id },
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteProject = async (id: string, userId: string) => {
  try {
    const deletedProject = await ProjectModel.findOneAndDelete({ _id: id });

    await BlockModel.deleteMany({ projectId: deletedProject._id });

    await User.findByIdAndUpdate(userId, {
      $pull: { projects: deletedProject._id },
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
