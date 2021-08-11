import React, { useState } from "react";
import UpdateCancel from "../../components/Buttons/ActionsButton/UpdateCancel";
import { firestore } from "../../firebase.config";
import { useAlert } from "react-alert";
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { setUpdate } from "../../slices/companySlice";

const PartnerEditMode = (props) => {
  const alertUi = useAlert();

  const [logo, setLogo] = useState(props.data.logo);
  const [name, setName] = useState(props.data.name);
  const [url, setUrl] = useState(props.data.website);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const dispatch = useDispatch();
  const update = useSelector(state => state.company.update);

  const onCancelHandler = () => {
    props.setAction({
      id: 0,
      editMode: false,
    });
  };

  const onUpdateHandler = () => {
    setBtnDisabled(true);
    axios.put('/companies', {
      id: props.id,
      name,
      logo,
      website: url
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
          value={url}
          onChange={(e) => setUrl(e.target.value)}
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

export default PartnerEditMode;
