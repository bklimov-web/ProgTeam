import {
  ImageBlock,
  ImageBlockSettings,
  ImageContentSettings,
} from "components/blocks/image-block";
import { TextBlock, TextContentSettings } from "components/blocks/text-block";
import { ReactNode } from "react";

export const getBlock = (
  block: any,
  updateBlock: any
): {
  component: ReactNode;
  contentSettings: ReactNode;
  blockSettings: ReactNode;
} => {
  switch (block.type) {
    case "TextBlockModel":
      const { title, description, subtitle } = block.content;

      return {
        component: (
          <TextBlock
            title={title}
            description={description}
            subtitle={subtitle}
          />
        ),
        contentSettings: (
          <TextContentSettings
            updateBlock={updateBlock}
            defaultValues={block.content.toJSON()}
          />
        ),
        blockSettings: null,
      };
    case "ImageBlockModel":
      const {
        content: { images },
        styles,
        _id,
      } = block;

      const imagesList = images.map((image: any) => {
        return {
          ...image.toJSON(),
          _id: image._id.toString(),
        };
      });

      const id = _id.toString();

      return {
        component: (
          <ImageBlock id={id} styles={styles.toJSON()} images={imagesList} />
        ),
        contentSettings: (
          <ImageContentSettings data={imagesList} updateBlock={updateBlock} />
        ),
        blockSettings: (
          <ImageBlockSettings
            divStyles={styles.toJSON()}
            updateBlock={updateBlock}
          />
        ),
      };
    default:
      return { component: null, contentSettings: null, blockSettings: null };
  }
};
