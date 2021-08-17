import React, { useState } from 'react';
import UpdateCancel from '../../components/Buttons/ActionsButton/UpdateCancel';
import { useAlert } from 'react-alert';
import axios from "../../axios";
import { useDispatch } from "react-redux";
import { setUpdate } from "../../slices/hrRequestSlice";

const RequestEditMode = (props) => {
  const alertUi = useAlert();
  const [status, setStatus] = useState(props.data.status);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const dispatch = useDispatch();

  const onCancelHandler = () => {
    props.setAction({
      id: 0, editMode: false
    })
  }

  const onUpdateHandler = () => {
      setBtnDisabled(true);
      axios.put('/reports/status', {
        id: props.id,
        status
      }).then(() => {
        alertUi.success("Updated successfully!");
        dispatch(setUpdate(true))
        onCancelHandler();
      }).catch((error) => {
        console.log(error)
        alertUi.error("There is a problem while updating!");
      })
      .finally(setBtnDisabled(false));
    };

  return (
    <>
      <td>{ props.data.requestor }</td>
      <td>{ props.data.department }</td>
      <td>{ props.data.classification }</td>
      <td>
        <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownDepartmentButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {status !== "" ? status : "Select all"}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownCategoryButton">
                  <button
                    onClick={() => setStatus("Pending")}
                    className="dropdown-item"
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => setStatus("Processing")}
                    className="dropdown-item"
                  >
                    Processing
                  </button>
                  <button
                    onClick={() => setStatus("Declined")}
                    className="dropdown-item"
                  >
                    Declined
                  </button>
                  <button
                    onClick={() => setStatus("Finished")}
                    className="dropdown-item"
                  >
                    Finished
                  </button>
            </div>
          </div>
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

export default RequestEditMode
