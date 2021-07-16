import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../../components/Layouts/DefaultLayout';
import { useParams } from 'react-router';
import { firestore } from '../../../firebase.config';
import PostCategoryList from './PostCategoryList';
import { NoRecordFound } from '../../../components/Table/NoRecordFound';

const PostCategory = () => {
  const { cat } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = () => {
    firestore
      .collection('posts')
      .where('category', '==', cat)
      .get()
      .then(documentSnapshot => {
        let posts = documentSnapshot.docs.map((data) => {
            return { uid: data.id, data: data.data() };
        });
        console.log(posts);
        setPosts(posts);
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
      <h2>Posts</h2>
      {
        ! loading ? displayTable() : <>loading...</>
      }
    </DefaultLayout>
  )
};

export default PostCategory
