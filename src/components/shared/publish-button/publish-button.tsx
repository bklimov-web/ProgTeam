"use client";

import { Globe } from "lucide-react";
import { Button } from "../ui/button";
import { FC } from "react";

type Props = {
  isPublished: boolean;
  updateProject: (data: any) => void;
};

const PublishButton: FC<Props> = ({ updateProject, isPublished = false }) => {
  return (
    <Button
      className="ml-4"
      onClick={() => updateProject({ isPublished: !isPublished })}
    >
      {isPublished ? (
        "Published"
      ) : (
        <>
          Publish <Globe className="ml-1.5" />
        </>
      )}
    </Button>
  );
};

export default PublishButton;
