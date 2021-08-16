import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert';
import ActionButtons from '../../components/Buttons/ActionsButton/ActionButtons';
import axios from '../../axios';
import { useDispatch } from 'react-redux';
import { setUpdate } from '../../slices/categorySlice';

const CategoryActions = ({ propValues, setAction, action }) => {
  const alertUi = useAlert();
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            axios.delete(`/categories/${propValues.id}`).then(() => {
                alertUi.success('Deleted Successfully!');
                dispatch(setUpdate(true))
            }).catch((e) => {
                console.log(e);
                alertUi.error('Something is wrong!');
            })
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
       id: propValues.id,
       editMode: true
    });
  }

  return (
    <>
      <td>{ propValues.data.name }</td>
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
