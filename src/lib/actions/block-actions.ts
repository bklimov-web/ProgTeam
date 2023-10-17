import { BlockModel, ProjectModel } from "database/project.model";
import { revalidatePath } from "next/cache";

export const createBlock = async (projectId: string, data: any) => {
  "use server";

  try {
    const newBlock = await BlockModel.create({
      // projectId,
      ...data,
    });

    await ProjectModel.findByIdAndUpdate(projectId, {
      $push: { blocks: newBlock._id },
    });

    revalidatePath("/project/:id");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateBlock = (id: string, type: string) => async (data: any) => {
  "use server";

  try {
    await BlockModel.findOneAndUpdate({ _id: id, type }, data, {
      new: true,
    });

    revalidatePath("/project/:id");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteBlock = (projectId: string, id: string) => async () => {
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
