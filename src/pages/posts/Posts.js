import React, {useEffect, useState} from 'react';
import PostItem from './PostItem';
import firebase from 'firebase';
import moment from 'moment';
import classes from "./PostItem.module.css";
import { convertFromRaw, Editor, EditorState, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { convertToHTML } from 'draft-convert';
import draftToHtml from 'draftjs-to-html';

const Posts = ({ category, onCategoryChanged }) => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('posts')
      .onSnapshot(documentSnapshot => {
        let postData = documentSnapshot.docs.map(data => data.data());
        setPost(postData);
      });
    return subscriber;
  });

  const convert = (storedState) => {
    const convertedState = convertFromRaw(JSON.parse(storedState))
    return draftToHtml(convertedState.getCurrentContent());
  }

  return (
    

    <div className={classes.postContainer}>
      {post.map(item => (
        <div className={classes.container}>
          <div className={classes.postHeader}>
            <div className={classes.adminUser}>
            <i className="fa fa-user-circle fa-2x"></i>
              Admin
            </div>
            <div className={classes.date}>
              {moment(item.date).format('MMM DD, YYYY')}
            </div>
          </div>
            <div className={classes.title}>
              {item.title}
            </div>
            <div className={classes.category}>
              <i class="fa fa-tags"></i>
              {item.category}
            </div>
          <div>
          <div>
            
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
