import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { filterPost, setPost } from "../../../../slices/postSlice";
import axios from "../../../../axios";
import { useAlert } from "react-alert";

const Posts = () => {
  const alertUi = useAlert();
  const dispatch = useDispatch();
  const category = useSelector(state => state.post.category);
  const filterPosts = useSelector(state => state.post.filterPosts);

  useEffect(() => {

    axios.get('/posts').then(response => {
      let postData = response.data.content.map(data => {
        return {uid: data.id, data: {...data}}
      })
      dispatch(setPost(postData));
      dispatch(filterPost(category));
    }).catch(err => {
      alertUi.error("There is a problem in fetching posts data!");
    })

  }, [category, dispatch, alertUi]);
  
  return (
    <>
    {filterPosts.map(({ data, uid }) => (
        <PostItem
        data={{ ...data, uid }}
        uid={uid}
        key={uid}
        title={data.title}
        date={new Date(data.date_created)}
        category={data.category.name}
        body={JSON.parse(data.body)}>
      </PostItem>
    ))}
    </>
  );
};

export default Posts;
