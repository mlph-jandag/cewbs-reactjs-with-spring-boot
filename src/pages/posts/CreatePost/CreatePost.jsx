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
import axios from "../../../axios";
import { useDispatch } from "react-redux";
import { useAlert } from 'react-alert';

const CreatePost = () => {
  const { uid } = useParams();
  const alertUi = useAlert();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [screenTitle, setScreenTitle] = useState("New Post");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const dispatch = useDispatch();
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
            const content = convertFromRaw(body);
            setEditorState(EditorState.createWithContent(content));
          })
          .catch(() => {});
      }
    };

    fetchData();
  }, [uid]);

  const onSaveHandler = async () => {
    setLoading(true);
    let data = {
        title, category,
        body: JSON.stringify(editorState)
    };
    console.log(data);
    if (!handleValidation()) {
         axios.post('/posts', {
              ...data
         }).then(() => {
             alertUi.success("Posted successfully");
         }).catch((e) => {
             alertUi.error("There is something wrong with the inputs!");
         })
    }else{
        alertUi.error("There is something wrong with the inputs!");
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
    console.log(data);
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
                <button onClick={onSaveHandler}
                  className="btn btn-yellow float-right px-4 font-weight-bold"
                >
                  {loading ? "Loading..." : "Add Post"}
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
