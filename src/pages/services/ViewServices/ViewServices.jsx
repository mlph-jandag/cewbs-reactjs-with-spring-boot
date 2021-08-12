import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import ServiceForm from "../ServiceForm/ServiceForm";
import ServiceList from "../ServiceList/ServiceList";

const ViewServices = () => {
  const history = useHistory();
  const { uid } = useParams();

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <DefaultLayout>
      <button className="btn btn-custom mb-2" onClick={goBack}>
        <i className="fa fa-arrow-left"></i> Go Back
      </button>
      <h3 className="mb-4">
        <span className="fa fa-handshake-o fa-fw"></span> Services
      </h3>
      <div className="row">
        <div className="col-md-4">
          <ServiceForm id={uid}/>
        </div>
        <div className="col">
          <ServiceList id={uid}/>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ViewServices;
