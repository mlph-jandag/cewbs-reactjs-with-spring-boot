import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase.config';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert';
import ActionButtons from '../../components/Buttons/ActionsButton/ActionButtons';
import UpdateCancel from '../../components/Buttons/ActionsButton/UpdateCancel';

const CategoryActions = ({ propValues, setAction, action, formData, setFormData }) => {
  const alertUi = useAlert();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
    setFormData({
      name: propValues.data.category_name,
      slug: propValues.data.slug
    })
    setAction({
      id: propValues.uid,
      editMode: true
    });
  }

  const onCancelHandler = () => {
    setAction({
      id: 0, editMode: false
    })
  }

  const onUpdateHandler = () => {
    console.log(formData);
  }

  return (
    <div className="d-flex justify-content-around actions">
      {
        action.editMode && action.id == propValues.uid
        ?
        <UpdateCancel
          onCancel={ onCancelHandler }
          onUpdate={ onUpdateHandler }
        />
        :
        <ActionButtons
          onDeleteHandler={ onDeleteHandler }
          setIsEdit={ onClickSetEdit }
          data={ propValues }
        />
      }
    </div>
  )
}

export default CategoryActions
