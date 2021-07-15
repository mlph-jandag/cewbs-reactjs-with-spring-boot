import React, { useState, useEffect } from "react";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import { firestore } from "../../../firebase.config";
import CompanyItem from "./CompanyItem/CompanyItem";

const ViewPartners = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("companies")
      .onSnapshot((documentSnapshot) => {
        let companyData = documentSnapshot.docs.map((data) => {
          return { uid: data.id, data: data.data() };
        });
        console.log(companyData);
        setCompanies(companyData);
      });
    return unsubscribe;
  }, []);

  return (
    <DefaultLayout>
      <div className="card mt-2">
        <h5 className="card-header font-weight-heavy">View Partners</h5>
        <div className="card-body">
          <div className="row">
            <div class="col-md-10 mx-auto">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th></th>
                    <th>Name</th>
                    <th>Website</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map(({ data, uid }, index) => {
                    return (
                      <CompanyItem
                        data={{ ...data, uid }}
                        index={index + 1}
                        key={uid}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ViewPartners;
