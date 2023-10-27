"use client";

import { Button } from "components/shared/ui/button";
import { Progress } from "components/shared/ui/progress";
import { useEdgeStore } from "lib/edgestore";
import { FC, useState } from "react";
import { SingleImageDropzone } from "./single-image-dropzone";

type Props = {
  updateBlock: (imageUrl: string, thumbnailUrl: string) => void;
};

const DragAndDropImage: FC<Props> = ({ updateBlock }) => {
  const [file, setFile] = useState<File>();
  const [progressState, setProgressState] = useState(0);
  const { edgestore } = useEdgeStore();

  return (
    <div>
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
      />

      <Progress value={progressState} />

      <Button
        className="mt-5"
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicImages.upload({
              file,
              onProgressChange: (progress) => {
                setProgressState(progress);
              },
            });

            updateBlock(res.url, res.thumbnailUrl || res.url);
          }
        }}
      >
        Upload
      </Button>
    </div>
  );
};

export default DragAndDropImage;
