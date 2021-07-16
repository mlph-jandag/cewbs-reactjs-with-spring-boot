import React from "react";
import { firestore } from "../../../firebase.config";
import ServiceActions from "../ServiceActions";

const ServiceList = ({ id, services }) => {
  console.log(services);
  const deleteHandler = async (uid) => {
    console.log("delete", uid);
    await firestore
      .collection("companies")
      .doc(id)
      .update({
        services: services.filter((service) => service.id !== uid),
      });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Logo</th>
          <th>Service name</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => {
          return (
            <tr className="align-middle" key={service.id}>
              <td>{service.id}</td>
              <td>
                <a href="#" className="avatar">
                  <img alt={service.name} src={service.logo} />
                </a>
              </td>
              <td>{service.name}</td>
              <td>
                <ServiceActions
                  data={service}
                  deleteHandler={() => deleteHandler(service.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ServiceList;
