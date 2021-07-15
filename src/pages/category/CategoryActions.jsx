import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase.config';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert';
import ActionButtons from '../../components/Buttons/ActionsButton/ActionButtons';
import UpdateCancel from '../../components/Buttons/ActionsButton/UpdateCancel';

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

  const onResetEdit = () => {
    setIsEdit({
      id: data.uid,
      editMode: true
    });
  }

  const onCancelHandler = () => {
    setIsEdit({
      id: 0, editMode: false
    })
  }

  const onUpdateHandler = () => {

  }

  return (
    <div className="d-flex justify-content-around actions">
      {
        isEdit.editMode && isEdit.id == data.uid
        ?
        <UpdateCancel
          onCancel={ onCancelHandler }
          onUpdate={ onUpdateHandler }
        />
        :
        <ActionButtons
          onDeleteHandler={ onDeleteHandler }
          setIsEdit={ onResetEdit }
          data={ data }
        />
      }
    </div>
  )
}

export default CategoryActions
