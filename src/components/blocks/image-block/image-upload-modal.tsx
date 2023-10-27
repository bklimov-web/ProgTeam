import { DialogHeader, DialogTitle } from "components/shared/ui/dialog";
import { ImageUploadModalProps, img } from "./types";
import { BlockModel } from "database/project.model";
import { revalidatePath } from "next/cache";
import { DragAndDropImage } from "components/shared/drag-and-drop-image";

type typesImg = {
  images: img[];
  id: string;
  newSrc: string;
};

const ImageUploadModal = ({
  id,
  images,
  imageIndex,
}: ImageUploadModalProps) => {
  const handleUpdateBlock = async (imageUrl: string, thumbnailUrl: string) => {
    "use server";
    const block = await BlockModel.findOne({
      _id: id,
      type: "ImageBlockModel",
    });

    block.content.images[imageIndex].imageUrl = imageUrl;
    block.content.images[imageIndex].thumbnailUrl = thumbnailUrl;

    block.save();

    revalidatePath("/project/:id");
  };

  return (
    <DialogHeader>
      <DialogTitle>Image loader</DialogTitle>
      <DragAndDropImage updateBlock={handleUpdateBlock} />
    </DialogHeader>
  );
};

export default ImageUploadModal;
