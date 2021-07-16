import React, { useEffect, useState } from 'react';
import { firestore } from '../../firebase.config';

const RecentPosts = () => {
  const [postData, setPosts] = useState([]);

  const fetchRecent = () => {
    firestore
      .collection('posts')
      .limit(2)
      .get()
      .then(documentSnapshot => {
        let posts = documentSnapshot.docs.map((data) => {
            return { uid: data.id, data: data.data() };
        });
        setPosts(posts);
      });
  }
  
  useEffect(() => {
    fetchRecent();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="border-top-0">Title</th>
          <th className="border-top-0">Category</th>
          <th className="border-top-0">Date Created</th>
        </tr>
      </thead>
      <tbody>
        {
          postData.map((post, index) => {
            return (
              <tr key={index}>
                <td>{ post.data.title }</td>
                <td>{ post.data.category} </td>
                <td>{ post.data.created_at }</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default RecentPosts
