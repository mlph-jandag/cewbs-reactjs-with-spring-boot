import React,{ useEffect, useState} from "react";
import { getAxios } from "../../../api/apiHandler";
import LoadingText from "../../../components/Table/LoadingText";
import TableBodyNoRecord from "../../../components/Table/TableBodyNoRecord";
import UserAction from "./UserAction";
import { setUsers } from "../../../slices/userSlice";
import { useSelector, useDispatch } from "react-redux";

const UserList = () => {
  const {users, done} = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    getAxios('/users')
    .then(res => {
      console.log('loaded');
      const { content } = res.data;
      dispatch(setUsers(content));
    })
    .catch(err => {
      console.log(err);
    });
  }, [done]);


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
          users != null ? 
            users.length > 0 ? users.map((data, index) => {
              const { id, name , email, roles } = data;
              return (
                <tr key={ id }>
                  <td>{ index + 1 }</td>
                  <td>{ name }</td>
                  <td>{ email }</td>
                  <td>
                    { roles.map(role => role.name) }
                  </td>
                  <td>
                    <UserAction
                        propValues={{ data }}
                    />
                  </td>
                </tr>
              )
            }):
            <TableBodyNoRecord />
          :
          <LoadingText />
        }
      </tbody>
    </table>
  );
};

export default UserList;
