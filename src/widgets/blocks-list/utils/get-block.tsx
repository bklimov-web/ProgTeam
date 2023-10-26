import { ImageBlock, ImageBlockForm } from "entities/image-block";
import { TextBlock, TextBlockForm } from "entities/text-block";
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
      return {
        component: <ImageBlock />,
        form: <ImageBlockForm />,
      };
    default:
      return { component: null, form: null };
  }
};
