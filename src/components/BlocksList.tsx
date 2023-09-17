import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const BLOCKS = [
  {
    label: "Text",
  },
  {
    label: "Images",
  },
  {
    label: "Other",
  },
];

const BlocksList = () => {
  return (
    <div className="flex justify-between gap-5">
      <Button><Menu className="pr-2" /> All blocks</Button>

      <ul className="flex">
        {BLOCKS.map(({ label }) => (
          <Button
            variant={"blocks-list"}
            key={label}
          >
            {label}
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default BlocksList;
