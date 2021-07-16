import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import { firebaseAuth, firestore } from "../../../firebase.config";
import UserForm from "../UserForm/UserForm";
import UserList from "../UserList/UserList";

const ViewServices = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
        // await firebaseAuth
        //   .getUsers()
        //   .then((data) => {
        //     console.log(data.users)
        //     // setUseres(services);
        //   })
        //   .catch((error) => {
        //     console.log('Error fetching user data:', error);
        //   });
    };
    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <h3 className="mb-4">
        <span className="fa fa-user fa-fw"></span> Users
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
