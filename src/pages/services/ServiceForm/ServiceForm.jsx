import React, { useEffect, useState } from "react";
import firebaseApp, { firestore } from "../../../firebase.config";
import { useAlert } from "react-alert";
import { uid } from "uid";
import { useDispatch, useSelector } from "react-redux";
import { setEdit } from "../../../slices/serviceSlice";

const ServiceForm = ({ id, services }) => {
  const dispatch = useDispatch()
  const alertUi = useAlert();
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [description, setDescription] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const editId = useSelector(state => state.service.edit)

  useEffect(() => {
    const fetchData = () => {
      if(editId !== '') {
        services.forEach(service => {
          if(service.id === editId) {
            setName(service.name)
            setDescription(service.description)
            setLogo(service.logo)
          }
        })
      }
    }
    fetchData()
  }, [editId, services])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setBtnDisabled(true);
    let newServices = services;
    if(editId !== '') {
      newServices = newServices.map(service => {
        if(service.id === editId)
          return {name, logo, description, id: service.id}
        return service;
      })
    } else
      newServices = [...services, {name, logo, description, id: uid()}]
      
    firestore
      .collection("companies")
      .doc(id)
      .update({
        services: newServices
      })
      .then((result) => {
        console.log("result", result);
        alertUi.success("Service saved successfully!");
        setName('')
        setLogo('')
        setDescription('')
      })
      .catch((err) => {
        console.log(err);
        alertUi.error("There was an error occured!");
      })
      .finally(setBtnDisabled(false));
      dispatch(setEdit(''))
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
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ServiceForm;
