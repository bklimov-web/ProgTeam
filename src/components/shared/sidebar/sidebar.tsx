import { SheetTrigger, SheetContent, Sheet } from "components/shared/ui/sheet";
import { ReactNode } from "react";

const Sidebar = ({
  open,
  setOpen,
  trigger,
  content,
}: {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  trigger: ReactNode;
  content: ReactNode;
}) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="p-4" side={"left"}>
        {content}
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
