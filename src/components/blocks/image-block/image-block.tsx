"use client";
import { useState, FC, useCallback, useMemo } from "react";
import ImageUploadModal from "./image-upload-modal";
import ImageBlockSettings from "./image-block-settings";
import { Button } from "components/shared/ui/button";
import ImageContentSettings from "./image-content-settings";
import { Sidebar } from "components/shared/sidebar";
import { Dialog, DialogTrigger } from "components/shared/ui/dialog";
import { AspectRatio } from "components/shared/ui/aspect-ratio";

interface img {
  id: number;
  title: string;
  alt: string;
  src: string;
}

interface divStyles {
  paddingBottom: string;
  paddingTop: string;
  background: string;
}
type ImageProps = {
  data?: img[];
  blockStyles?: {
    paddingBottom: string;
    paddingTop: string;
    background: string;
  };
};

const imageData = [
  {
    id: 0,
    alt: "Img1",
    title: "Img1",
    src: "http://static8.depositphotos.com/1146092/920/i/450/depositphotos_9202690-Dog-sleep.jpg",
  },
  {
    id: 1,
    alt: "Img2",
    title: "Img2",
    src: "http://st.depositphotos.com/1030020/3490/i/450/depositphotos_34909067-German-Shepherd-Dog-and-cat-together.jpg",
  },
  {
    id: 2,
    alt: "Img3",
    title: "Img3",
    src: "http://static9.depositphotos.com/1032440/1111/i/450/depositphotos_11110118-Little-dogs-in-the-park.jpg",
  },
];

const ImageBlock: FC<ImageProps> = (props) => {
  const [images, setImages] = useState(imageData);
  //  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);
  const defaultStyles = {
    paddingBottom: "10px",
    paddingTop: "10px",
    background: "lightblue",
  };
  const [divStyles, setDivStyles] = useState({ ...defaultStyles });

  const handleDivStyleChange = (data: divStyles) => {
    setDivStyles(data);
  };

  const handleImageUpload = (index: number) => (newImage: any) => {
    //  console.log(selectedImageIndex);
    console.log(index);
    console.log(newImage[0].path);
    const updatedImages = [...imageData];
    //  console.log(updatedImages[selectedImageIndex]);
    console.log(URL.createObjectURL(newImage[0]));
    updatedImages[index].src = URL.createObjectURL(newImage[0]);

    setImages(updatedImages);
  };

  const renderImages = useCallback(() => {
    return (
      <>
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger
              className="w-[300px] h-[300px]"
              //  onClick={() => setSelectedImageIndex(index + 1)}
            >
              {/*<AspectRatio ratio={16 / 9} className="h-full w-full">*/}
              <img
                className="w-[100%] h-[100%] object-cover"
                src={image.src}
                alt={image.alt}
                //key={image.id}
              />
              {/*</AspectRatio>*/}
            </DialogTrigger>
            <ImageUploadModal onImageUpload={handleImageUpload(index)} />
          </Dialog>
        ))}
      </>
    );
  }, [images]);

  return (
    <div style={divStyles} id="block-id" className="mx-auto h-full px-5">
      <div>
        <div className="flex justify-between gap-5 w-[1000px]">
          {renderImages()}
        </div>
      </div>
      <Sidebar
        content={<ImageContentSettings data={imageData} />}
        trigger={<Button>Content Settings</Button>}
      />
      <Sidebar
        content={
          <ImageBlockSettings
            data={imageData}
            handleDivStyleChange={handleDivStyleChange}
            divStyles={divStyles}
            backgroundColor={divStyles.background}
          />
        }
        trigger={<Button>Block Settings</Button>}
      />
    </div>
  );
};

export default ImageBlock;

// model IamgeBlock {
//id: number
//}
