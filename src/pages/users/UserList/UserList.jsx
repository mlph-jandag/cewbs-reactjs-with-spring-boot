import React,{ useEffect, useState} from "react";
import { getAxios } from "../../../api/apiHandler";
import LoadingText from "../../../components/Table/LoadingText";
import TableBodyNoRecord from "../../../components/Table/TableBodyNoRecord";
import UserAction from "./UserAction";
import { setUsers, setSearch } from "../../../slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../../components/Pagination/Pagination";

const UserList = () => {
  const {users, done} = useSelector(state => state.users);
  const dispatch = useDispatch();

  const search = useSelector(state => state.users.search);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);

  useEffect(() => {
    getAxios(`/users/search?page=${currentPage}&search=${search}`)
    .then(response => {
      console.log('loaded');
      const { content } = response.data;
      setPages(response.data.totalPages);
      setCurrentPage(response.data.number);
      setFirst(response.data.first);
      setLast(response.data.last);
      dispatch(setUsers(content));
    })
    .catch(err => {
      console.log(err);
    });
  }, [done, currentPage, search, dispatch]);

  const nextPage = (page) => {
      if (page <= pages || page >= 0) {
        setCurrentPage(page);
      }
  };
  return (
    <>
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
    <Pagination
            totalPages={pages}
            first={first}
            last={last}
            currentPage={currentPage}
            navigate={nextPage}
    />
    </>
  );
};

export default UserList;
