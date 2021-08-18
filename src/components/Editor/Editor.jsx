import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function TextEditor({ editorState: state, onChangedHandler }) {
  const [editorState, setEditorState] = useState(() =>
    state ? state : EditorState.createEmpty()
  );
  const onChangeHandler = (e) => {
    // setEditorState(e);
    // onChangedHandler(convertToRaw(editorState.getCurrentContent()));
    onChangedHandler(e);
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
          editorState={state}
          onEditorStateChange={onChangeHandler}
        />
      </div>
    </div>
  );
}
