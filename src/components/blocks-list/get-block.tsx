import { ImageBlock } from "components/blocks/image-block";
import TextBlock from "components/blocks/text-block";

export const getBlock = (block: any) => {
  switch (block.type) {
    case "TextBlockModel":
      return (
        <TextBlock
          title={block.title}
          description={block.description}
          subtitle={block.subtitle}
        />
      );
    case "ImageBlockModel":
      return <ImageBlock />;
    default:
      return null;
  }
};
