import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import { firestore } from "../../../firebase.config";
import classes from "./CreatePartner.module.css";

const CreatePartner = () => {
  const { uid } = useParams();
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [site, setSite] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

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

  const onSaveHandler = async () => {
    setLoading(true);

    if (!handleValidation()) {
      try {
        const response = firestore.collection("companies");
        let id = null;
        if (uid) {
          id = uid;
        } else {
          id = await response.doc().id;
        }
        await response.doc(id).set({
          name,
          image: logo,
          url: site,
          services: [],
        });
      } catch (e) {
        console.log(e);
      } finally {
        setName("");
        setLogo("");
        setSite("");
      }
    }
    setLoading(false);
    return true;
  };

  const handleValidation = () => {
    if (name === "") {
      setError((prev) => {
        return {
          ...prev,
          name: "Name must not be empty",
        };
      });
      return true;
    }
    if (logo === "") {
      console.log("eerrr");
      setError((prev) => {
        return {
          ...prev,
          logo: "Logo must not be empty",
        };
      });
      return true;
    }
    return false;
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
