import React from "react";
import { firestore } from "../../../firebase.config";

const UserList = ({ id, users }) => {
  const deleteHandler = async (uid) => {
    console.log("delete", uid);
    // await firestore
    //   .collection("companies")
    //   .doc(id)
    //   .update({
    //     services: services.filter((service) => service.id !== uid),
    //   });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>email</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            // <tr className="align-middle" key={service.id}>
            //   <td>{service.id}</td>
            //   <td>
            //     <a href="#" className="avatar">
            //       <img alt={service.name} src={service.logo} />
            //     </a>
            //   </td>
            //   <td>{service.name}</td>
            //   <td>
            //     <ServiceActions
            //       data={service}
            //       deleteHandler={() => deleteHandler(service.id)}
            //     />
            //   </td>
            // </tr>
            <h1>hi</h1>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
