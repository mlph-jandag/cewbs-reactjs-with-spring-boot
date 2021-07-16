import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar";
import TextEditor from "../../../components/Editor/Editor";
import classes from "./CreatePost.module.css";
import CategoryDropDown from "../../../components/Buttons/CategoryDropDown";
import { ContentState, EditorState } from "draft-js";
import { firestore } from "../../../firebase.config";
import { Redirect, useParams } from "react-router";
import {convertFromRaw, convertToRaw} from "draft-js";
import { useHistory } from 'react-router-dom';


const CreatePost = () => {
  const { uid } = useParams();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [screenTitle, setScreenTitle] = useState("New Post");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      if (uid) {
        setScreenTitle("Edit Post");
        await firestore
          .collection("posts")
          .doc(uid)
          .get()
          .then((data) => {
            const { title, category, body } = data.data()
            setTitle(title);
            setCategory(category);
            const content = convertFromRaw(JSON.parse(body));
            console.log(content)
            setEditorState(EditorState.createWithContent(content));
          })
          .catch(() => {});
      }
    };

    fetchData();
  }, [uid]);

  const onSaveHandler = async () => {
    setLoading(true);
    if (!handleValidation()) {
      try {
        const response = firestore.collection("posts");
        let id = null;
        if (uid) {
          id = uid;
          console.log("ALREADY EXIST")
        } else {
          id = await response.doc().id;
          console.log("NEW POST")
        }
        await response.doc(id).set({
          body: editorState,
          title: title,
          category: category,
          created_at: new Date().toDateString(),
        });
        redirectToPosts();
      } catch (e) {
        console.log(e);
      } finally {
        setTitle("");
        setCategory("");
      }
    }
    setLoading(false);
  };

  const redirectToPosts = () => {
    let path = `posts`; 
    history.push(path);
  }

  const handleValidation = () => {
    if (title === "") {
      setError((prev) => {
        return {
          ...prev,
          name: "Title must not be empty",
        };
      });
      return true;
    }
    if (Object.keys(editorState.entityMap).length > 0) {
      console.log(editorState);
      for (let key in editorState.entityMap) {
        if (editorState.entityMap[key].data.src.includes("base64")) {
          setError((prev) => {
            return { ...prev, editor: "Only include links to images" };
          });
          return true;
        }
      }
    }
    if (category === "") {
      setError((prev) => {
        return {
          ...prev,
          category: "You must choose a category",
        };
      });
      return true;
    }
    return false;
  };

  const onCategoryChanged = (data) => {
    setError({});
    setCategory(data);
  };
  const onTitleChanged = (e) => {
    setError({});
    setTitle(e.target.value);
  };

  const getEditorState = (data) => {
    setError({});
    setEditorState(data);
  };

  return (
    <>
      <Navbar />
      <div className="row mr-0 ml-0">
        <Sidebar />
        <div className="col p-4">
          <div className="card mt-2">
            <h5 className="card-header font-weight-heavy">{screenTitle}</h5>
            <div className="card-body">
              <div className="form-group">
                <input
                  className={[classes.input, "form-control"].join(" ")}
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  placeholder="Enter post title"
                  onChange={onTitleChanged}
                />
                <span style={{ color: "red" }}>{error["name"]}</span>
              </div>
              <TextEditor editorState={editorState} onChangedHandler={getEditorState} />
              <span style={{ color: "red" }}>{error["editor"]}</span>
              <div className={classes.bottomActions}>
                <div className={classes.drop}>
                  <CategoryDropDown
                    category={category}
                    onCategoryChanged={onCategoryChanged}
                  />
                </div>
                <span style={{ color: "red" }}>{error["category"]}</span>
                <button onClick={onSaveHandler} className={classes.postButton}>
                  {loading ? "Loading..." : "Post"}
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
