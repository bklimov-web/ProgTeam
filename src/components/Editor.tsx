'use client'
import { useEffect, useState } from "react";
import CKeditor from "./CKeditor";

export default function Editor({content}) {
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
  const [data, setData] = useState<string>(content);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="w-3/5 mx-auto">

      <CKeditor
        name="description"
        onChange={(data: string) => {
          setData(data);
        } }
        editorLoaded={editorLoaded} value={data} />

      {/* {JSON.stringify(data)} */}

    </div>
  );
}
