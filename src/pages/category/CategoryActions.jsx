import React from 'react'

const CategoryActions = ({ data }) => {
  console.log(data);
  return (
    <div className="d-flex justify-content-around">
      <span>
        <i className="fa fa-pencil text-info"></i>
      </span>
      <span>
        <i className="fa fa-trash-o text-danger"></i>
      </span>
    </div>
  )
}

export default CategoryActions
