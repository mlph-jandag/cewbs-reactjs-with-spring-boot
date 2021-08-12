import React, { useEffect, useState } from "react";
import firebaseApp, { firestore } from "../../../firebase.config";
import { useAlert } from "react-alert";
import { uid } from "uid";
import { useDispatch, useSelector } from "react-redux";
import { setServiceUpdate } from "../../../slices/serviceSlice";
import { isFormValid } from "../../../utils/validation";
import axios from "../../../axios";

const ServiceForm = ({ id, services }) => {
  const dispatch = useDispatch()
  const alertUi = useAlert();
  
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [accessLink, setAccessLink] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let data = {
      name, logo, accessLink
    }
    if(isFormValid(data)) {
      setBtnDisabled(true)
      axios.post(`/companies/${id}/services`, {
        ...data
      }).then(() => {
        alertUi.success("Added successfully");
        dispatch(setServiceUpdate(true))
      }).catch((e) => {
        alertUi.error("Please check inputs!");
      })
      setName('')
      setLogo('')
      setAccessLink('')
    } else {
      alertUi.error("Please check inputs!");
    }
    setBtnDisabled(false);
    // let newServices = services;
    // if(editId !== '') {
    //   newServices = newServices.map(service => {
    //     if(service.id === editId)
    //       return {name, logo, description, id: service.id}
    //     return service;
    //   })
    // } else
    //   newServices = [...services, {name, logo, description, id: uid()}]
      
    // firestore
    //   .collection("companies")
    //   .doc(id)
    //   .update({
    //     services: newServices
    //   })
    //   .then((result) => {
    //     console.log("result", result);
    //     alertUi.success("Service saved successfully!");
    //     setName('')
    //     setLogo('')
    //     setAccessLink('')
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alertUi.error("There was an error occured!");
    //   })
    //   .finally(setBtnDisabled(false));
    //   dispatch(setEdit(''))
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
          <label className="mt-4">Access Link</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={accessLink}
            onChange={(e) => setAccessLink(e.target.value)}
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
