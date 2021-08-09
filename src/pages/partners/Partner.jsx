import React from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import PartnerForm from "./PartnerForm";
import PartnerList from "./PartnerList";

const Partner = () => {
  return (
    <DefaultLayout>
      <h3 className="mb-4">
        <span className="fa fa-list-alt fa-fw"></span> Partner
      </h3>
      <div className="row">
        <div className="col-md-4">
          <PartnerForm />
        </div>
        <div className="col">
          <PartnerList />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Partner;
