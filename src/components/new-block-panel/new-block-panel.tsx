"use client";

import { Button } from "../shared/ui/button";
import { FC } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
  SheetTrigger,
} from "components/shared/ui/sheet";

const BLOCKS = [
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
      type: "ImageBlockModel",
      content: {
        images: [
          {
            alt: "Img1",
            title: "Img1",
            imageUrl:
              "http://static8.depositphotos.com/1146092/920/i/450/depositphotos_9202690-Dog-sleep.jpg",
          },
          {
            alt: "Img2",
            title: "Img2",
            imageUrl:
              "http://st.depositphotos.com/1030020/3490/i/450/depositphotos_34909067-German-Shepherd-Dog-and-cat-together.jpg",
          },
          {
            alt: "Img3",
            title: "Img3",
            imageUrl:
              "http://static9.depositphotos.com/1032440/1111/i/450/depositphotos_11110118-Little-dogs-in-the-park.jpg",
          },
        ],
      },
      styles: {
        paddingTop: "10px",
        paddingBottom: "10px",
        background: "white",
      },
    },
  },
  // {
  //   id: "other",
  //   label: "Other",
  //   onClick: () => undefined,
  // },
];

type Props = {
  handleCreateBlock: (blockData: any) => void;
};

const NewBlockPanel: FC<Props> = ({ handleCreateBlock }) => {
  return (
    <div className="flex justify-between gap-5 mt-[80px]">
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <Menu className="pr-2" />
            All blocks
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <SheetClose />
        </SheetContent>
      </Sheet>

      <ul className="flex">
        {BLOCKS.map(({ id, label, blockData }) => (
          <Button
            onClick={() => handleCreateBlock(blockData)}
            variant={"blocks-list"}
            key={id}
          >
            {label}
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default NewBlockPanel;
