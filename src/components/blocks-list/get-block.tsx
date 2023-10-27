import { ImageBlock } from "components/blocks/image-block";
import ImageBlockForm from "components/blocks/image-block/image-block-form";
import TextBlock from "components/blocks/text-block";
import TextBlockForm from "components/blocks/text-block/text-block-form";
import BackgroundBlock from "components/blocks/background-block/background-block";
import BackgroundForm from "components/blocks/background-block/background-block-form";
import Header from "components/blocks/header/Header";
import HeaderForm from "components/blocks/header/header-form";
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

    case "BackgroundBlockModel":
      const { color, titlebg } = block.content;
      return {
        component: <BackgroundBlock color={color} titlebg={titlebg} />,
        form: (
          <BackgroundForm
            updateBlock={updateBlock}
            defaultValues={block.content.color}
          />
        ),
      };

    case "HeaderBlockModel":
      const { logo, navLinks } = block.content;
      return {
        component: <Header logo={logo} navLinks={navLinks} />,
        form: (
          <HeaderForm
            updateBlock={updateBlock}
            defaultValues={block.content.toJSON()}
          />
        ),
      };

    default:
      return { component: null, form: null };
  }
};
