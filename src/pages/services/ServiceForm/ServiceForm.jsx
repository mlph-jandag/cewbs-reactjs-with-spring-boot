import React, { useState } from "react";
import firebaseApp, { firestore } from "../../../firebase.config";
import { useAlert } from "react-alert";
import { uid } from "uid";

const ServiceForm = ({ id, services }) => {
  const alertUi = useAlert();
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [description, setDescription] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

  console.log("form", id);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setBtnDisabled(true);
    console.log("sev", services);
    firestore
      .collection("companies")
      .doc(id)
      .update({
        services: [
          ...services,
          {
            name,
            logo,
            description,
            id: uid(),
          },
        ],
      })
      .then((result) => {
        console.log("result", result);
        alertUi.success("Added service successfully!");
      })
      .catch((err) => {
        console.log(err);
        alertUi.error("There was an error occured!");
      })
      .finally(setBtnDisabled(false));
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="card">
        <div className="card-header">Add Service</div>
        <div className="card-body">
          <label>Service Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Service name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="mt-4">Logo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Service Logo link"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          />
          <label className="mt-4">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button disabled={btnDisabled} className="btn btn-yellow px-4 mt-4">
            Add New
          </button>
        </div>
      </div>
    </form>
  );
};

export default ServiceForm;
