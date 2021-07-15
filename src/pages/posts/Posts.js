import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import firebase from "firebase";
import moment from "moment";
import classes from "./PostItem.module.css";
import {
  convertFromRaw
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const Posts = ({ category, onCategoryChanged }) => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const subscriber = firebase
      .firestore()
      .collection("posts")
      .onSnapshot((documentSnapshot) => {
        let postData = documentSnapshot.docs.map((data) => data.data());
        setPost(postData);
      });
    return subscriber;
  }, []);

  const convert = (storedState) => {
    return stateToHTML(convertFromRaw(storedState));
  };

  return (
    <>
    {post.map((item) => (
        <div className="card mt-5">
        <span className="card-header font-weight-light">
          <i className="fa fa-user-circle fa-2x"></i>
          <div className={classes.admin}>Admin</div>
          <div className={classes.date}>
              {moment(item.date).format("MMM DD, YYYY")}
              <div className={classes.action}><i class="fa fa-ellipsis-v"></i></div>
          </div>
        </span>
        <div className="card-body">
          <div className={classes.title}>{item.title}</div>
          <div className={classes.category}>
            <i class="fa fa-tags"></i>
              {item.category}
          </div>
          <div className={classes.content}><div dangerouslySetInnerHTML={{ __html: convert(item.body) }} /></div>
        </div>
        </div>
    ))}
    </>
  );
};

export default Posts;
