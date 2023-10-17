"use client";

import { FC } from "react";
import BlockWrapper from "components/block-wrapper/block-wrapper";

import { ImageBlock } from ".";

type ImageProps = {
  id: string;
  projectId: string;
  images: img[];
  styles: {
    paddingTop: string;
    paddingBottom: string;
    background: string;
  };
};

interface img {
  title: string;
  alt: string;
  imageUrl: string;
}

const ImageBlockWrapper: FC<ImageProps> = ({
  id,
  projectId,
  images,
  styles,
}) => {
  const content = { id, projectId, images, styles };

  return (
    <BlockWrapper
      handleDelete={() => console.log("delete")}
      updateBlock={() => console.log("update")}
      content={content}
      className="text-center py-10 bg-blue-100"
    >
      <ImageBlock
        projectId={projectId}
        id={id}
        key={id}
        images={images.map((image) => image.toJSON())}
        styles={styles.toJSON()}
      />
    </BlockWrapper>
  );
};

export default ImageBlockWrapper;
