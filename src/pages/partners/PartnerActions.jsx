import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert';
import ActionButtons from '../../components/Buttons/ActionsButton/ActionButtons';
import { deleteData } from '../../api/firestoreService';
import { Link } from 'react-router-dom';

const PartnerActions = ({ propValues, setAction, action }) => {
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
              await deleteData({ table: 'companies', id: propValues.uid});
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
      <td><a href="#" className="avatar">
            <img alt={propValues.data.name} src={propValues.data.image} />
          </a></td>
      <td>{ propValues.data.name }</td>
      <td>{ propValues.data.url }</td>
      <td>
        <div className="d-flex justify-content-around actions">
          <Link to={`/services/${propValues.uid}`} className="text-warning">
            <i className="fa fa-eye"></i>
          </Link>
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

export default PartnerActions
