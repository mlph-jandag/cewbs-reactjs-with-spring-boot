import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import { firestore } from "../../../firebase.config";
import ServiceForm from "../ServiceForm/ServiceForm";
import ServiceList from "../ServiceList/ServiceList";

const ViewServices = () => {
  const history = useHistory();
  const { uid } = useParams();
  const [services, setServices] = useState([]);

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    const fetchData = async () => {
      if (!uid) {
        goBack();
      } else {
        await firestore
          .collection("companies")
          .doc(uid)
          .onSnapshot((data) => {
            const { services } = data.data();
            setServices(services);
          });
      }
    };
    fetchData();
  }, [uid, history, goBack]);

  return (
    <DefaultLayout>
      <button className="btn btn-warning mb-2" onClick={goBack}>
        <i className="fa fa-arrow-left"></i> Go Back
      </button>
      <h3 className="mb-4">
        <span className="fa fa-handshake-o fa-fw"></span> Services
      </h3>
      <div className="row">
        <div className="col-md-4">
          <ServiceForm id={uid} services={services} />
        </div>
        <div className="col">
          <ServiceList id={uid} services={services} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ViewServices;
