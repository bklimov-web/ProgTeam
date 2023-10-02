"use client";

import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
} from "components/ui/sheet";
import { ReactNode } from "react";

const SettingsSidebar = ({
  trigger,
  content,
}: {
  trigger: ReactNode;
  content: ReactNode;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="p-4" side={"left"}>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          {content}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SettingsSidebar;
