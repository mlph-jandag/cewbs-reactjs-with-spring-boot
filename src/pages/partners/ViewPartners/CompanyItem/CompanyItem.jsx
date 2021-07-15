import React, { useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../../../firebase.config";
import classes from "./CompanyItem.module.css";
import Modal from "../../../../components/UI/ConfirmModal/Modal";

const CompanyItem = ({ data, index }) => {
  const deleteHandler = async () => {
    try {
      await firestore.collection("companies").doc(data.uid).delete();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <tr className="align-middle">
        <td>{index}</td>
        <td>
          <a href="#" className="avatar">
            <img alt={data.name} src={data.image} />
          </a>
        </td>
        <td>{data.name}</td>
        <td>{data.url}</td>
        <td>
          <Link to={`services/${data.uid}`} className="text-info mr-2">
            <i className="fa fa-eye"></i>
          </Link>
          <Link to={`create-partner/${data.uid}`} className="text-warning mr-2">
            <i className="fa fa-pencil"></i>
          </Link>
          <span onClick={deleteHandler} className={classes.actionButton}>
            <i className="fa fa-trash-o text-danger"></i>
          </span>
        </td>
      </tr>
    </>
  );
};

export default CompanyItem;
