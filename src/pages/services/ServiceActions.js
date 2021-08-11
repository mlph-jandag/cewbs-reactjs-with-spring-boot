import React from 'react';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert';
import ActionButtons from '../../components/Buttons/ActionsButton/ActionButtons';
import axios from '../../axios';
import { useDispatch } from 'react-redux';
import { setServiceUpdate } from '../../slices/serviceSlice';

const ServiceActions = ({ propValues, setAction, action }) => {
  const alertUi = useAlert();
  const dispatch = useDispatch()

  const onDeleteHandler = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            axios.delete(`/companies/${propValues.id}/services/${propValues.service.id}`).then(() => {
              alertUi.success('Deleted Successfully!');
              dispatch(setServiceUpdate(true))
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
      id: propValues.service.id,
      editMode: true
    });
  }

  return (
    <>
      <td><a href="#" className="avatar">
            <img alt={propValues.service.name} src={propValues.service.logo} />
          </a></td>
      <td>{ propValues.service.name }</td>
      <td>{ propValues.service.accessLink }</td>
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

export default ServiceActions
