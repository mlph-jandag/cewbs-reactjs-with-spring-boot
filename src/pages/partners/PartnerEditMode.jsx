import React, { useState } from "react";
import UpdateCancel from "../../components/Buttons/ActionsButton/UpdateCancel";
import { firestore } from "../../firebase.config";
import { useAlert } from "react-alert";

const PartnerEditMode = (props) => {
  const alertUi = useAlert();

  const [logo, setLogo] = useState(props.data.image);
  const [name, setName] = useState(props.data.name);
  const [url, setUrl] = useState(props.data.url);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const onCancelHandler = () => {
    props.setAction({
      id: 0,
      editMode: false,
    });
  };

  const onUpdateHandler = () => {
    setBtnDisabled(true);
    firestore
      .collection("companies")
      .doc(props.id)
      .update({
        image: logo,
        name,
        url,
      })
      .then((result) => {
        console.log(result);
        alertUi.success("Updated successfully!");
        onCancelHandler();
      })
      .catch((error) => {
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
