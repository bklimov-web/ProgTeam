import { BlockModel, ProjectModel } from "database/project.model";
import { revalidatePath } from "next/cache";

export const createBlock = async (projectId: string, data: any) => {
  "use server";

  try {
    const newBlock = await BlockModel.create(data);

    await ProjectModel.findByIdAndUpdate(projectId, {
      $push: { blocks: newBlock._id },
    });

    revalidatePath("/project/:id");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateBlock = async (id: string, data: any, type: string) => {
  "use server";
  console.log(data);
  try {
    const newBlock = await BlockModel.findOneAndUpdate(
      { _id: id, type },
      data,
      { new: true },
    );

    revalidatePath("/project/:id");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteBlock = async (projectId: string, id: string) => {
  "use server";

  try {
    const deletedBlock = await BlockModel.findOneAndDelete({ _id: id });

    await ProjectModel.findByIdAndUpdate(projectId, {
      $pull: { blocks: deletedBlock._id },
    });

    revalidatePath("/project/:id");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
