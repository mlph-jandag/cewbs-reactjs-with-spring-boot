import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useHistory, useParams } from "react-router";
import { addFormData, updateFormData } from "../../../api/firestoreService";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import { isFormValid } from "../../../utils/validation";
import classes from "./CreatePartner.module.css";

const CreatePartner = () => {
  const alertUi = useAlert();
  const { uid } = useParams();
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [site, setSite] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
    };
    fetchData();
  }, [uid]);

  const redirectToPartners = () => {
    let path = `partners`;
    history.push(path);
  };

  const onSaveHandler = async () => {
    setLoading(true);
    let data = {
      name,
      image: logo,
      url: site,
      services: [],
    };
    if (isFormValid(data)) {
      try {
        if (uid) {
          await updateFormData({
            id: uid,
            formData: data,
            table: "companies",
          });
        } else {
          await addFormData({
            formData: data,
            table: "companies",
          });
        }
        alertUi.success("Added successfully");
        redirectToPartners();
      } catch (e) {
        console.log(e);
      } finally {
        setName("");
        setLogo("");
        setSite("");
      }
    } else {
      alertUi.error("Please check inputs!");
    }
    setLoading(false);
  };

  const nameHandler = (e) => {
    setError({});
    setName(e.target.value);
  };
  const logoHandler = (e) => {
    setError({});
    setLogo(e.target.value);
  };

  return (
    <DefaultLayout>
      <div className="card mt-2">
        <h5 className="card-header font-weight-heavy">New Partner</h5>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="logo" className="form-label">
              Company Name
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={nameHandler}
            />
            <span style={{ color: "red" }}>{error["name"]}</span>
          </div>
          <div className="form-group">
            <label htmlFor="logo" className="form-label">
              Logo URL
            </label>
            <input
              className="form-control"
              type="text"
              id="logo"
              name="logo"
              value={logo}
              onChange={logoHandler}
            />
            <span style={{ color: "red" }}>{error["logo"]}</span>
          </div>
          <div className="form-group">
            <label htmlFor="logo" className="form-label">
              Company Website
            </label>
            <input
              className="form-control"
              type="text"
              id="site"
              name="site"
              value={site}
              onChange={(e) => setSite(e.target.value)}
            />
          </div>
          <button onClick={onSaveHandler} className="btn btn-yellow px-5">
            {loading ? "Loading..." : "Save"}
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CreatePartner;
