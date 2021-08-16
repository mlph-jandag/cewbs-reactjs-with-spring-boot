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
        {
          users.length > 0 ? users.map((user, index) => {
          return (
            <tr key={ user.id }>
              <td>{ index + 1 }</td>
              <td>{ user.name }</td>
              <td>{ user.email }</td>
              <td>
                { user.roles.map(role => role.name) }
              </td>
              <td className="text-center">
                <span className="mr-3">
                    <i className="fa fa-pencil text-info"></i>
                </span>
                <span>
                    <i className="fa fa-trash-o text-danger"></i>
                </span>
              </td>
            </tr>
          )
        }): (
          <tr className="danger text-center">
             <td colSpan="5">No users found.</td>
          </tr>
          )
        }
      </tbody>
    </table>
  );
};

export default UserList;
