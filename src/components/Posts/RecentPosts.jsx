import React, { useEffect, useState } from 'react';
import { axiosAutoload } from '../../api/apiHandler';

const RecentPosts = () => {
  const [postData, setPosts] = useState([]);

  const fetchRecent = () => {
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
