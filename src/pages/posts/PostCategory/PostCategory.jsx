import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../../components/Layouts/DefaultLayout';
import { useParams } from 'react-router';
import PostCategoryList from './PostCategoryList';
import { NoRecordFound } from '../../../components/Table/NoRecordFound';
import { Link } from 'react-router-dom';
import axios from '../../../axios';

const PostCategory = () => {
  const { cat } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catName, setCatName] = useState('');

  const fetchPosts = () => {
    axios.get('/posts').then(response => {
      let filteredData = response.data.content
          .filter(data => data.category.name === cat)
          .map(data => {
            return {uid: data.id, data: {...data}}
          })
      setPosts(filteredData)
      setLoading(false)
    }).catch(err => {

    })
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const displayTable = () => {
    if (posts.length > 0) {
      return <PostCategoryList posts={posts}/>
    } else {
      return <NoRecordFound />
    }
  }

  return (
    <DefaultLayout>
      <div className="float-right">
        <Link to="/posts" 
          className="btn btn-secondary mr-3">All Posts</Link>
        <Link
          to="/create-post"
          className="btn btn-yellow"
        ><i className="fa fa-plus"></i> Create New Post</Link>
      </div>
      <h2 className="pb-3">
          Posts &raquo;&nbsp;
          <span className="tocapitalize">
            { cat.replace(/-/g, " ") }
          </span>
      </h2>
      {
        ! loading ? displayTable() : <><i className="fa fa fa-spinner fa-spin"></i> Loading...</>
      }
    </DefaultLayout>
  )
};

export default PostCategory
