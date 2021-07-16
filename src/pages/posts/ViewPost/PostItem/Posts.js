import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { filterPost, setPost } from "../../../../slices/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.post.category);
  const filterPosts = useSelector(state => state.post.filterPosts);

  useEffect(() => {
    const subscriber = firebase
      .firestore()
      .collection("posts")
      .onSnapshot((documentSnapshot) => {
        let postData = documentSnapshot.docs.map((data) => {
          return { uid: data.id, data: data.data() };
        });
        
        dispatch(setPost(postData));
        dispatch(filterPost(category));
      });
    return subscriber;
  }, [category, dispatch]);
  
  return (
    <>
    {filterPosts.map(({ data, uid }) => (
        <PostItem
        data={{ ...data, uid }}
        uid={uid}
        key={uid}
        title={data.title}
        date={new Date(data.created_at)}
        category={data.category}
        body={data.body}>
      </PostItem>
    ))}
    </>
  );
};

export default Posts;
