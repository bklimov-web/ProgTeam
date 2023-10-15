import { BlockModel, ProjectModel } from "database/project.model";
import { revalidatePath } from "next/cache";

export const createBlock = async (projectId: string, data: any) => {
  "use server";

  try {
    const createdData = { ...data, disabled: false };

    const newBlock = await BlockModel.create(createdData);

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

export const duplicateBlock = async (projectId: string, id: string) => {
  "use server";

  try {
    const blockToDuplicate = await BlockModel.findById(id);

    if (!blockToDuplicate) {
      throw new Error("Block not found");
    }

    const duplicatedBlockData = {
      ...blockToDuplicate.toObject(),
      _id: undefined,
    };

    await createBlock(projectId, duplicatedBlockData);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const moveBlockUp = async (projectId: string, id: string) => {
  "use server";

  try {
    const project = await ProjectModel.findById(projectId);

    if (!project) {
      throw new Error("project not found");
    }

    const blockIndex = project.blocks.indexOf(id);

    if (blockIndex === 0) return;

    [project.blocks[blockIndex], project.blocks[blockIndex - 1]] = [
      project.blocks[blockIndex - 1],
      project.blocks[blockIndex],
    ];

    await project.save();

    revalidatePath(`/project/:id`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const moveBlockDown = async (projectId: string, id: string) => {
  "use server";

  try {
    const project = await ProjectModel.findById(projectId);

    if (!project) {
      throw new Error("project not found");
    }

    const blockIndex = project.blocks.indexOf(id);
    const lastBlockIndex = project.blocks.length - 1;

    if (blockIndex === lastBlockIndex) return;

    [project.blocks[blockIndex], project.blocks[blockIndex + 1]] = [
      project.blocks[blockIndex + 1],
      project.blocks[blockIndex],
    ];

    await project.save();

    revalidatePath(`/project/:id`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const toggleDisableBlock = async (id: string) => {
  "use server";

  try {
    const block = await BlockModel.findById(id);

    if (!block) {
      throw new Error("Block not found");
    }

    block.disabled = !block.disabled;
    await block.save();

    revalidatePath(`/project/:id`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

