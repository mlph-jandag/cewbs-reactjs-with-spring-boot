import React from "react";

const CompanyItem = ({ data, index }) => {
  return (
    <tr className="align-middle">
      <td>{index}</td>
      <td>
        <a href="#" class="avatar">
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
        <a href="#" className="text-danger">
          <i className="fa fa-trash-o"></i>
        </a>
      </td>
    </tr>
  );
};

export default CompanyItem;
