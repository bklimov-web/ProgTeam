import {
  SheetTrigger,
  SheetContent,
  Sheet,
} from "shared/component-library/sheet";
import { ReactNode } from "react";

const Sidebar = ({
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
        {content}
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
