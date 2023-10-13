import React, { useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import BalloonBlockEditor from "../../ckeditor5/build/ckeditor";
import BalloonBlockEditor from "@ckeditor/ckeditor5-build-balloon-block";

interface CKeditorProps {
  onChange: (data: string) => void;
  editorLoaded: boolean;
  name: string;
  value: string;
}

export default function CKeditor({
  onChange,
  editorLoaded,
  name,
  value,
}: CKeditorProps) {
  const editorRef = useRef<{
    CKEditor: typeof CKEditor;
    BalloonBlockEditor: typeof BalloonBlockEditor;
  }>();
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      BalloonBlockEditor: require("@ckeditor/ckeditor5-build-balloon-block"),
    };
  }, []);

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={BalloonBlockEditor}
          data={value}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            onChange(data);
          }}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote",
            ],
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}
