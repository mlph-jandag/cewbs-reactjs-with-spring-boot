import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert';
import { useDispatch } from 'react-redux';
import { deleteAxios } from '../../../api/apiHandler';
import ActionButtons from '../../../components/Buttons/ActionsButton/ActionButtons';

const UserAction = ({ propValues, setAction = {}, action = {} }) => {
  const alertUi = useAlert();
  const dispatch = useDispatch();
  const { data } = propValues;

  const onDeleteHandler = () => {
    console.log("test");
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
    // setAction({
    //    id: propValues.id,
    //    editMode: true
    // });
    console.log('set edit');
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
