import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../../components/Layouts/DefaultLayout';
import { useParams } from 'react-router';
import { firestore } from '../../../firebase.config';
import PostCategoryList from './PostCategoryList';
import { NoRecordFound } from '../../../components/Table/NoRecordFound';
import { Link } from 'react-router-dom';

const PostCategory = () => {
  const { cat } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catName, setCatName] = useState('');

  const fetchPosts = () => {
    firestore
      .collection('posts')
      .where('category', '==', cat)
      .get()
      .then(documentSnapshot => {
        let posts = documentSnapshot.docs.map((data) => {
            return { uid: data.id, data: data.data() };
        });
        setPosts(posts);
        if (posts.length > 0) {
          setCatName(posts[0].data.category)
        }
        setLoading(false);
      });
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
        ! loading ? displayTable() : <>loading...</>
      }
    </DefaultLayout>
  )
};

export default PostCategory
