import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase.config';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert';
import ActionButtons from '../../components/Buttons/ActionButtons';

const CategoryActions = ({ data, setIsEdit, isEdit }) => {
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

  const reSetIsEdit= () => {
    setIsEdit({
      id: data.uid,
      editMode: true
    });
  }

  const onCancel = () => {
    setIsEdit({
      id: 0, editMode: false
    })
  }
  return (
    <div className="d-flex justify-content-around actions">
      {
        isEdit.editMode && isEdit.id == data.uid
        ?
        <>
          <button
            className="btn btn-primary btn-sm mr-1"
          >Update</button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={ onCancel }
          >Cancel</button>
        </>
        :
        <ActionButtons
          onDeleteHandler={ onDeleteHandler }
          setIsEdit={ reSetIsEdit }
          data={ data }
        />
      }
    </div>
  )
}

export default CategoryActions
