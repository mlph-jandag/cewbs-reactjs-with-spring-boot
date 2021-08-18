import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert';
import { useDispatch } from 'react-redux';
import { deleteAxios } from '../../../api/apiHandler';
import ActionButtons from '../../../components/Buttons/ActionsButton/ActionButtons';
import { setUserDone, setUserEditData } from '../../../slices/userSlice';

const UserAction = ({ propValues, setAction = {}, action = {} }) => {
  const alertUi = useAlert();
  const dispatch = useDispatch();
  const { data } = propValues;

  const onDeleteHandler = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            deleteAxios('/users', data.id)
            .then(() => {
              alertUi.success('Deleted Successfully!');
              dispatch(setUserDone());
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
    dispatch(setUserEditData({
      id: propValues.id,
      email: propValues.email,
      name: propValues.name,
      role: 'EDITOR',
      password: 'TEST', // do not display password
    }));
  }

  return (
    <>
      <div className="d-flex justify-content-around actions">
        <ActionButtons
          onDeleteHandler={ onDeleteHandler }
          setIsEdit={ onClickSetEdit }
          data={ propValues }
        />
      </div>
    </>
  )
}

export default UserAction
