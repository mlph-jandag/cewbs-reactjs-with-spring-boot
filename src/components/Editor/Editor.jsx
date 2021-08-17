import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function TextEditor({ onChangedHandler }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onChangeHandler = (e) => {
    setEditorState(e);
    onChangedHandler(convertToRaw(editorState.getCurrentContent()));
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          padding: "2px",
          minHeight: "400px",
        }}
      >
        <Editor
          editorState={editorState}
          onEditorStateChange={onChangeHandler}
        />
      </div>
    </div>
  );
}
