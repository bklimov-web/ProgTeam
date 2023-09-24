"use client";

import BlocksList from "components/BlocksList";
import TextBlock from "components/TextBlock/TextBlock";
import { FC, useState } from "react";

const content = {
  description: "Description",
  subtitle: "Subtitle",
  title: "TITLE",
};

const Screen = ({ createBlock }: { createBlock: () => any }) => {
  const [components, setComponents] = useState<FC[]>([]);
  // console.log(renderToStaticMarkup(<TextBlock content={content} />));

  return (
    <>
      {components.map((_, index) => {
        return <TextBlock key={index} content={content} />;
      })}
      <BlocksList createBlock={createBlock} addComponents={setComponents} />
    </>
  );
};

export default Screen;
