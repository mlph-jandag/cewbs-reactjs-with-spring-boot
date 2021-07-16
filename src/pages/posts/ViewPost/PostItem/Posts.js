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
        let postData = documentSnapshot.docs.map((data) => {
          return { uid: data.id, data: data.data() };
        });
        
        setPost(postData);
      });
    return subscriber;
  }, []);

  return (
    <>
    {post.map(({ data, uid }) => (
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
