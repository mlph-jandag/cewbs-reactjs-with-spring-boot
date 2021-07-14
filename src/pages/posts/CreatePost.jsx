import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import TextEditor from "../../components/Editor/Editor";
import classes from "./CreatePost.module.css";
import CategoryDropDown from "../../components/Buttons/CategoryDropDown";
import { EditorState } from "draft-js";
import { firestore } from "../../firebase.config";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onSaveHandler = async () => {
    //TODO
    console.log("body", editorState);
    console.log("title", title);
    console.log("category", category);
    console.log("created_at", new Date().toDateString());
    try {
      const response = firestore.collection("posts");
      const id = await response.doc().id;
      await response.doc(id).set({
        body: editorState,
        title: title,
        category: category,
        created_at: new Date().toDateString(),
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onCategoryChanged = (data) => {
    console.log(data);
    setCategory(data);
  };

  const getEditorState = (data) => {
    setEditorState(data);
  };

  return (
    <>
      <Navbar />
      <div className="row mr-0 ml-0">
        <Sidebar />
        <div className="col p-4">
          <div className="card mt-2">
            <h5 className="card-header font-weight-heavy">New Post</h5>
            <div className="card-body">
              <div className="form-group">
                <input
                  className={[classes.input, "form-control"].join(" ")}
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  placeholder="Enter post title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <TextEditor onChangedHandler={getEditorState} />
              <div className={classes.bottomActions}>
                <div className={classes.drop}>
                  <CategoryDropDown
                    category={category}
                    onCategoryChanged={onCategoryChanged}
                  />
                </div>
                <button onClick={onSaveHandler} className={classes.postButton}>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
