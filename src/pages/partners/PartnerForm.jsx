import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useHistory, useParams } from "react-router";
import { addFormData, updateFormData } from "../../api/firestoreService";
import { firestore } from "../../firebase.config";
import { isFormValid } from "../../utils/validation";

const PartnerForm = () => {
  const alertUi = useAlert();
  const { uid } = useParams();
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [site, setSite] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (uid) {
        await firestore
          .collection("companies")
          .doc(uid)
          .get()
          .then((data) => {
            const { name, image, url } = data.data();
            setName(name);
            setLogo(image);
            setSite(url);
          })
          .catch(() => {});
      }
    };
    fetchData();
  }, [uid]);

  const onSaveHandler = async (e) => {
    e.preventDefault();
    let data = {
      name,
      image: logo,
      url: site,
      services: [],
    };
    if (isFormValid(data)) {
      try {
        setLoading(true);
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
            onChange={(e) => setName(e.target.value)}
          />
          <label className="mt-4">Logo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Logo..."
            onChange={(e) => setLogo(e.target.value)}
          />
          <label className="mt-4">Url</label>
          <input
            type="text"
            className="form-control"
            placeholder="url..."
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
