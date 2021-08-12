import React, { useState } from "react";
import UpdateCancel from "../../components/Buttons/ActionsButton/UpdateCancel";
import { useAlert } from "react-alert";
import axios from "../../axios";
import { useDispatch } from "react-redux";
import { setServiceUpdate } from "../../slices/serviceSlice";

const ServiceEditMode = (props) => {
  const alertUi = useAlert();

  const [logo, setLogo] = useState(props.data.logo);
  const [name, setName] = useState(props.data.name);
  const [accessLink, setAccessLink] = useState(props.data.accessLink);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const dispatch = useDispatch();

  const onCancelHandler = () => {
    props.setAction({
      id: 0,
      editMode: false,
    });
  };

  const onUpdateHandler = () => {
    setBtnDisabled(true);
    axios.put(`/companies/${props.id}/services/`, {
      id: props.data.id,
      name,
      logo,
      accessLink
    }).then(() => {
      alertUi.success("Updated successfully!");
      dispatch(setServiceUpdate(true))
      onCancelHandler();
    }).catch((error) => {
      console.log(error)
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
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          value={accessLink}
          onChange={(e) => setAccessLink(e.target.value)}
        />
      </td>
      <td>
        <UpdateCancel
          onCancelHandler={onCancelHandler}
          onUpdateHandler={onUpdateHandler}
          btnDisabled={btnDisabled}
        />
      </td>
    </>
  );
};

export default ServiceEditMode;
