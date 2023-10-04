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

const BLOCKS = [
  {
    id: "text",
    label: "Text",
    onClick: () => undefined,
  },
  {
    id: "images",
    label: "Images",
    onClick: () => undefined,
  },
  {
    id: "other",
    label: "Other",
    onClick: () => undefined,
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
        {BLOCKS.map(({ id, label, onClick }) => (
          <Button onClick={handleAddTextBlock} variant={"blocks-list"} key={id}>
            {label}
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default NewBlock;