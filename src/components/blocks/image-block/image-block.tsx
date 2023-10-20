import { FC } from "react";
import ImageUploadModal from "./image-upload-modal";
import ImageBlockSettings from "./image-block-settings";
import { Button } from "components/shared/ui/button";
import ImageContentSettings from "./image-content-settings";
import { Sidebar } from "components/shared/sidebar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "components/shared/ui/dialog";
import { updateBlock } from "lib/actions/block-actions";
import { ImageProps } from "./types";

const ImageBlock: FC<ImageProps> = ({ id, images, styles }) => {
  const renderImages = () => {
    return (
      <>
        {images.map((image) => {
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
                      updateBlock={updateBlock(id, "ImageBlockModel")}
                      id={image._id}
                      images={images}
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <div>{image.title}</div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div style={styles} id="block-id" className="mx-auto h-full px-5">
      <div>
        <div className="flex flex-wrap gap-10 w-[1000px] m-auto">
          {renderImages()}
        </div>
      </div>
      <Sidebar
        content={
          <ImageContentSettings
            data={images}
            updateBlock={updateBlock(id, "ImageBlockModel")}
          />
        }
        trigger={<Button>Content Settings</Button>}
      />
      <Sidebar
        content={
          <ImageBlockSettings
            divStyles={styles}
            updateBlock={updateBlock(id, "ImageBlockModel")}
          />
        }
        trigger={<Button>Block Settings</Button>}
      />
    </div>
  );
};

export default ImageBlock;
