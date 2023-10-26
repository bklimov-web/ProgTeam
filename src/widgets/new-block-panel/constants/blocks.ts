export const BLOCKS = [
  {
    id: "text",
    label: "Text",
    blockData: {
      type: "TextBlockModel",
      content: {
        description: "Description",
        title: "Title",
        subtitle: "Subtitle",
      },
    },
  },
  {
    id: "images",
    label: "Images",
    blockData: {
      content: {
        imageUrls: ["img1", "img2"],
      },
      type: "ImageBlockModel",
    },
  },
];
