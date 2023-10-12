"use client";

import { Button } from "../shared/ui/button";
import { FC, useState } from "react";
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
import TextBlock from "../blocks/text-block";
import ImageBlock from "components/blocks/image-block/image-block";

const BLOCKS = [
  {
    id: "text",
    label: "Text",
  },
  {
    id: "images",
    label: "Images",
  },
  {
    id: "other",
    label: "Other",
  },
];

type Props = {
  createBlock: () => any;
};

const NewBlock: FC<Props> = ({ createBlock }) => {
  const [open, setOpen] = useState(false);
  const handleClickAll = () => {
    setOpen(true);
  };

  const handleAddTextBlock = () => {
    createBlock();
  };

  const addNewBlock = (id: string) => {
    switch (id) {
      case "text":
        createBlock(); // Создать текстовый блок
        break;
      case "images":
        createBlock(); // Создать блок с изображениями
        break;
      // Добавьте другие кейсы для других типов блоков, если необходимо
      default:
        break;
    }
  };

  return (
    <div className="flex justify-between gap-5 mt-[80px]">
      <Sheet>
        <SheetTrigger asChild>
          <Button onClick={handleClickAll}>
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
        {BLOCKS.map(({ id, label }) => (
          <Button
            onClick={() => addNewBlock(id)}
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

export default NewBlock;
