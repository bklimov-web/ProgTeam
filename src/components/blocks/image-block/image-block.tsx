import { FC } from "react";
import ImageUploadModal from "./image-upload-modal";
import ImageBlockSettings from "./image-block-settings";
import { Button } from "components/shared/ui/button";
import ImageContentSettings from "./image-content-settings";
import { Sidebar } from "components/shared/sidebar";
import { Dialog, DialogTrigger } from "components/shared/ui/dialog";
import { updateBlock } from "lib/actions/block-actions";

interface img {
  title: string;
  alt: string;
  imageUrl: string;
  _id: string;
}

interface divStyles {
  paddingBottom: string;
  paddingTop: string;
  background: string;
}

type ImageProps = {
  id: string;
  images: img[];
  styles: {
    paddingTop: string;
    paddingBottom: string;
    background: string;
  };
};

const ImageBlock: FC<ImageProps> = ({ id, images, styles }) => {
  //  const [dataImg, setDataImages] = useState(images);
  //  const [divStyles, setDivStyles] = useState({ ...styles });

  //  const handleDivStyleChange = (data: divStyles) => {
  //    setDivStyles(data);
  //  };

  const handleImageUpload = (index: number) => async (newImage: any) => {
    "use server";
    const updatedImages = [...images];
    updatedImages[index].imageUrl = URL.createObjectURL(newImage[0]);

    //setDataImages(updatedImages);
  };

  const renderImages = () => {
    return (
      <>
        {images.map((image) => {
          return (
            <Dialog key={image._id}>
              <DialogTrigger className="w-[300px] h-[300px]">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src={image.imageUrl}
                  alt={image.alt}
                  //key={image.id}
                />
              </DialogTrigger>
              <ImageUploadModal
                onImageUpload={updateBlock(id, "ImageBlockModel")}
              />
            </Dialog>
          );
        })}
      </>
    );
  };

  return (
    <div style={styles} id="block-id" className="mx-auto h-full px-5">
      <div>
        <div className="flex justify-between gap-5 w-[1000px]">
          {renderImages()}
        </div>
      </div>
      <Sidebar
        content={<ImageContentSettings data={images} />}
        trigger={<Button>Content Settings</Button>}
      />
      <Sidebar
        content={
          <ImageBlockSettings
            data={images}
            //handleDivStyleChange={handleDivStyleChange}
            divStyles={styles}
            backgroundColor={styles.background}
            updateBlock={updateBlock(id, "ImageBlockModel")}
          />
        }
        trigger={<Button>Block Settings</Button>}
      />
    </div>
  );
};

export default ImageBlock;
