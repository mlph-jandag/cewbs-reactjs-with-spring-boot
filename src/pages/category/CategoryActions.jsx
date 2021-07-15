import React from 'react';
import { firestore } from '../../firebase.config';

const CategoryActions = ({ data }) => {

  const onDeleteHandler =  async () => {
    try {
      await firestore.collection("categories").doc(data.uid).delete();
    } catch (e) {
      console.log(e);
    }
  } 
  return (
    <div className="d-flex justify-content-around actions">
      <span>
        <i className="fa fa-pencil text-info"></i>
      </span>
      <span
        onClick={onDeleteHandler}
      >
        <i className="fa fa-trash-o text-danger"></i>
      </span>
    </div>
  )
}

export default CategoryActions
