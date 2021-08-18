import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import UserForm from "../UserForm/UserForm";
import UserList from "../UserList/UserList";
import { setSearch } from "../../../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const ViewServices = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.users.search)

  useEffect(() => {
    dispatch(setSearch(''))
  }, [dispatch])

  const onSearchHandler = (e) => {
    dispatch(setSearch(e.target.value))
  }

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
    };
    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <h3 className="mb-4">
        <span className="fa fa-user fa-fw"></span> Users
        <div className="pull-right">
          <div className="input-group">
              <input className="form-control py-2 border-right-0 border" type="search" value={search} onChange={onSearchHandler} id="search"/>
              <span className="input-group-append">
                  <div className="input-group-text bg-transparent"><i className="fa fa-search"></i></div>
              </span>
          </div>
        </div>
      </h3>
      <div className="row">
        <div className="col-md-4">
          <UserForm users={users} />
        </div>
        <div className="col">
          <UserList users={users} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ViewServices;
