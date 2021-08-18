import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from '../../slices/postSlice';
import { getAxios } from '../../api/apiHandler';

const RecentPosts = () => {
  const [postData, setpostData] = useState([]);

  useEffect(() => {
    getAxios('/posts?page=0')
    .then(res => {
      const { content } = res.data;
      console.log(content);
      setpostData(content);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="border-top-0">Title</th>
          <th className="border-top-0" width="200px">Category</th>
        </tr>
      </thead>
      <tbody>
        {
          postData.map((post, index) => {
            return (
              <tr key={index}>
                <td>{ post.title }</td>
                <td>{ post.category.name} </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default RecentPosts
