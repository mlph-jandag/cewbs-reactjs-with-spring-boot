import React, { useState } from 'react';
import UpdateCancel from '../../components/Buttons/ActionsButton/UpdateCancel';
import { useAlert } from 'react-alert';
import axios from "../../axios";
import { useDispatch } from "react-redux";
import { setUpdate } from "../../slices/categorySlice";

const CategoryEditMode = (props) => {
  const alertUi = useAlert();
  const [name, setCatName] = useState(props.data.name);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const dispatch = useDispatch();
  
  const onCancelHandler = () => {
    props.setAction({
      id: 0, editMode: false
    })
  }

  const onUpdateHandler = () => {
      setBtnDisabled(true);
      axios.put('/categories', {
        id: props.id,
        name
      }).then(() => {
        alertUi.success("Updated successfully!");
        dispatch(setUpdate(true))
        onCancelHandler();
      }).catch((error) => {
        alertUi.error("There is a problem while updating!");
      })
      .finally(setBtnDisabled(false));
    };

  return (
    <>
      <td>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setCatName(e.target.value)}
        />
      </td>
      <td>
        <UpdateCancel 
          onCancelHandler={ onCancelHandler }
          onUpdateHandler={ onUpdateHandler }
          btnDisabled={ btnDisabled }
        />
      </td>
    </>
  )
}

export default CategoryEditMode
