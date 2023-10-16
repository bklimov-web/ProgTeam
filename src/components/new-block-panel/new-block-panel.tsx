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
import TextBlock from "../blocks/text-block";
import ImageBlock from "components/blocks/image-block/image-block";

const BLOCKS = [
  {
    id: "text",
    label: "Text",
<<<<<<< HEAD:src/components/new-block/new-block.tsx
=======
    blockData: {
      type: "TextBlockModel",
      description: "Description",
      title: "Title",
      subtitle: "Subtitle",
    },
>>>>>>> bf43fa3a13034cfef0df22d891967e9766609e50:src/components/new-block-panel/new-block-panel.tsx
  },
  {
    id: "images",
    label: "Images",
<<<<<<< HEAD:src/components/new-block/new-block.tsx
  },
  {
    id: "other",
    label: "Other",
=======
    blockData: {
      type: "ImageBlockModel",
      imageUrls: ["img1", "img2"],
    },
>>>>>>> bf43fa3a13034cfef0df22d891967e9766609e50:src/components/new-block-panel/new-block-panel.tsx
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

<<<<<<< HEAD:src/components/new-block/new-block.tsx
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

=======
const NewBlockPanel: FC<Props> = ({ handleCreateBlock }) => {
>>>>>>> bf43fa3a13034cfef0df22d891967e9766609e50:src/components/new-block-panel/new-block-panel.tsx
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
<<<<<<< HEAD:src/components/new-block/new-block.tsx
        {BLOCKS.map(({ id, label }) => (
          <Button
            onClick={() => addNewBlock(id)}
=======
        {BLOCKS.map(({ id, label, blockData }) => (
          <Button
            onClick={() => handleCreateBlock(blockData)}
>>>>>>> bf43fa3a13034cfef0df22d891967e9766609e50:src/components/new-block-panel/new-block-panel.tsx
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
