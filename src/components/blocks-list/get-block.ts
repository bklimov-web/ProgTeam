export const getBlock = (block: any) => {
  switch (block.type) {
    case "TextBlockModel":
      return "Text";
    case "ImageBlockModel":
      return "Image";
    default:
      return null;
  }
};
