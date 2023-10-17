import { ImageBlock } from "components/blocks/image-block";
import ImageBlockForm from "components/blocks/image-block/image-block-form";
import TextBlock from "components/blocks/text-block";
import TextBlockForm from "components/blocks/text-block/text-block-form";
import { ReactNode } from "react";

export const getBlock = (
  block: any,
  updateBlock: any,
): { component: ReactNode; form: ReactNode } => {
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
        form: (
          <TextBlockForm
            updateBlock={updateBlock}
            defaultValues={block.content.toJSON()}
          />
        ),
      };
    case "ImageBlockModel":
      const {
        content: { images },
        styles,
        _id,
      } = block;

      const id = _id.toString();

      return {
        component: (
          <ImageBlock
            id={id}
            styles={styles.toJSON()}
            images={images.map((image: any) => {
              return {
                ...image.toJSON(),
                _id: image._id.toString(),
              };
            })}
          />
        ),
        form: <ImageBlockForm />,
      };
    default:
      return { component: null, form: null };
  }
};
