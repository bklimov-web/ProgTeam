import { FC } from "react";
import ImageUploadModal from "./image-upload-modal";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "components/shared/ui/dialog";
import { ImageProps } from "./types";

const ImageBlock: FC<ImageProps> = ({ id, images, styles }) => {
  return (
    <div style={styles} id="block-id" className="mx-auto h-full px-5">
      <div>
        <div className="flex flex-wrap gap-10 w-[1000px] m-auto">
          {images.map((image, index) => {
            return (
              <div>
                <Dialog key={image._id}>
                  <DialogTrigger className="w-[300px] h-[300px]">
                    <img
                      className="w-[100%] h-[100%] object-cover"
                      src={image.imageUrl}
                      alt={image.alt}
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <div>
                      <ImageUploadModal
                        imageIndex={index}
                        id={id}
                        images={images}
                      />
                    </div>
                  </DialogContent>
                </Dialog>

                <div>{image.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageBlock;
