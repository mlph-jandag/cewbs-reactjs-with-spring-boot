import React from 'react';
import { firestore } from '../../firebase.config';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const CategoryActions = ({ data }) => {
  const alertUi = useAlert();

  const onDeleteHandler = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              await firestore.collection("categories").doc(data.uid).delete();
              alertUi.success('Deleted Successfully!');
            } catch (e) {
              console.log(e);
              alertUi.error('Something is wrong!');
            }
          }
        },
        {
          label: 'No',
        }
      ]
    });
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
