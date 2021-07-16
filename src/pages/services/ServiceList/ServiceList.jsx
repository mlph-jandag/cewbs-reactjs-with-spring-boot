import React from "react";
import { useDispatch } from "react-redux";
import { firestore } from "../../../firebase.config";
import { setEdit } from "../../../slices/serviceSlice";
import ServiceActions from "../ServiceActions";

const ServiceList = ({ id, services }) => {

  const dispatch = useDispatch()

  const deleteHandler = async (uid) => {
    await firestore
      .collection("companies")
      .doc(id)
      .update({
        services: services.filter((service) => service.id !== uid),
      });
  };
  const editHandler = (uid) => {
    dispatch(setEdit(uid))
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
                  editHandler={() => editHandler(service.id)}
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
