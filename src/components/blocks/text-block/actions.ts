import { prisma } from "app/db";
import { revalidatePath } from "next/cache";
import { TextBlockFormSchema } from "./text-block-form";

export const deleteBlock = async (id: number, projectId: number) => {
  "use server";

  await prisma.block.delete({
    where: { id, projectId: projectId },
  });

  revalidatePath(`/project/${projectId}`);
};

export const updateBlock = async (
  values: TextBlockFormSchema,
  id: number,
  projectId: number,
) => {
  "use server";

  await prisma.block.update({
    where: { id, projectId },
    data: values,
  });

  revalidatePath(`/project/${projectId}`);
};
