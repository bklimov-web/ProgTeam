import { SheetTrigger, SheetContent, Sheet } from "components/ui/sheet";
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
        {content}
      </SheetContent>
    </Sheet>
  );
};

export default SettingsSidebar;
