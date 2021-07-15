import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import firebase from "firebase";

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

  return (
    <>
    {post.map((item) => (
        <PostItem
        title={item.title}
        date={new Date(item.created_at)}
        category={item.category}
        body={item.body}>
      </PostItem>
    ))}
    </>
  );
};

export default Posts;
