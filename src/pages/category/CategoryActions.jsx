import React from 'react';
import { firestore } from '../../firebase.config';
import { useAlert } from 'react-alert'

const CategoryActions = ({ data }) => {
  const alert = useAlert();

  const onDeleteHandler =  async () => {
    try {
      // await firestore.collection("categories").doc(data.uid).delete();
      // alert.success('Deleted Successfully!');
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
