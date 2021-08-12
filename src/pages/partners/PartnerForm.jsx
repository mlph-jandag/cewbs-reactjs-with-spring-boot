import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import axios from "../../axios";
import { setUpdate } from "../../slices/companySlice";
import { isFormValid } from "../../utils/validation";

const PartnerForm = () => {
  const alertUi = useAlert();
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [site, setSite] = useState("");
  const [loading, setLoading] = useState(false);

  const onSaveHandler = async (e) => {
    e.preventDefault();
    let data = {
      name,
      logo,
      website: site,
    };
    if (isFormValid(data)) {
        setLoading(true);
        axios.post('/companies', {
          ...data 
        }).then(() => {
          alertUi.success("Added successfully");
          dispatch(setUpdate(true))
        }).catch((e) => {
          alertUi.error("Please check inputs!");
        })
        setName("");
        setLogo("");
        setSite("");
    } else {
        alertUi.error("Please check inputs!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={onSaveHandler}>
      <div className="card">
        <div className="card-header">Add Partner</div>
        <div className="card-body">
          <label>Partner Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Partner name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          <label className="mt-4">Logo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Logo..."
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            />
          <label className="mt-4">Url</label>
          <input
            type="text"
            className="form-control"
            placeholder="url..."
            value={site}
            onChange={(e) => setSite(e.target.value)}
          />
          <button disabled={loading} className="btn btn-yellow px-4 mt-4">
            Add New
          </button>
        </div>
      </div>
    </form>
  );
};

export default PartnerForm;
