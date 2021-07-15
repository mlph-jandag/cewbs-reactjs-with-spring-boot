import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase.config';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert';
import ActionButtons from '../../components/Buttons/ActionsButton/ActionButtons';

const CategoryActions = ({ propValues, setAction, action, formData, setFormData }) => {
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
              await firestore.collection("categories").doc(propValues.uid).delete();
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

  const onClickSetEdit = () => {
    setAction({
      id: propValues.uid,
      editMode: true
    });
  }

  return (
    <div className="d-flex justify-content-around actions">
      <ActionButtons
        onDeleteHandler={ onDeleteHandler }
        setIsEdit={ onClickSetEdit }
        data={ propValues }
      />
    </div>
  )
}

export default CategoryActions
