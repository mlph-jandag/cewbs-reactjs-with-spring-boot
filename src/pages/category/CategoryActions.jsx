import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert';
import ActionButtons from '../../components/Buttons/ActionsButton/ActionButtons';
import { deleteData } from '../../api/firestoreService';

const CategoryActions = ({ propValues, setAction, action }) => {
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
              await deleteData({ table: 'categories', id: propValues.uid});
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
    <>
      <td>{ propValues.data.category_name }</td>
      <td>{ propValues.data.slug }</td>
      <td>
        <div className="d-flex justify-content-around actions">
          <ActionButtons
            onDeleteHandler={ onDeleteHandler }
            setIsEdit={ onClickSetEdit }
            data={ propValues }
          />
        </div>
      </td>
    </>
  )
}

export default CategoryActions
