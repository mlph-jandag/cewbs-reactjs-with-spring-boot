import React,{ useEffect, useState} from "react";
import { getAxios } from "../../../api/apiHandler";

const UserList = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    getAxios('/users')
    .then(res => {
      console.log(res);
      const { content } = res.data;
      setusers(content);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr key={ user.id }>
              <td>{ index + 1 }</td>
              <td>{ user.name }</td>
              <td>{ user.email }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
