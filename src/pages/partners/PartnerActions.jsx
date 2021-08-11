import React from 'react';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert';
import ActionButtons from '../../components/Buttons/ActionsButton/ActionButtons';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import { useDispatch } from 'react-redux';
import { setUpdate } from '../../slices/companySlice';

const PartnerActions = ({ propValues, setAction, action }) => {
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
            axios.delete(`/companies/${propValues.id}`).then(() => {
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
      <td><a href="#" className="avatar">
            <img alt={propValues.data.name} src={propValues.data.logo} />
          </a></td>
      <td>{ propValues.data.name }</td>
      <td>{ propValues.data.website }</td>
      <td>
        <div className="d-flex justify-content-around actions">
          <Link to={`/services/${propValues.id}`} className="text-warning">
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
