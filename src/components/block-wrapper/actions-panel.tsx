"use client";

import { Button } from "components/shared/ui/button";

type Props = {
  disabled: boolean;
  id: string;
  projectId: string;
};

const ActionsPanel = ({ wrapperActions }: any) => {
  return (
    <div className="absolute right-[100px] flex space-x-2 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {wrapperActions.map(({ key, Icon, handler }: any) => (
        <Button onClick={() => handler()} key={key}>
          {Icon}
        </Button>
      ))}
    </div>
  );
};

export default ActionsPanel;
