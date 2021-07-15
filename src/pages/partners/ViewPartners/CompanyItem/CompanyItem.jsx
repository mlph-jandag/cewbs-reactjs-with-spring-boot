import React, { useState } from "react";
import classes from "./CompanyItem.module.css";

const CompanyItem = ({ data, index }) => {
  const deleteHandler = () => {
    if (window.confirm("Are you sure to delete this record?")) {
      console.log("delete", data.uid);
    }
  };
  return (
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
        <a href="#" className="text-info mr-2">
          <i className="fa fa-eye"></i>
        </a>
        <a href="#" className="text-warning mr-2">
          <i className="fa fa-pencil"></i>
        </a>
        <span onClick={deleteHandler} className={classes.actionButton}>
          <i className="fa fa-trash-o text-danger"></i>
        </span>
      </td>
    </tr>
  );
};

export default CompanyItem;
