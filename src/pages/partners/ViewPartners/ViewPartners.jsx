import React, { useState, useEffect } from "react";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import CompanyItem from "./CompanyItem/CompanyItem";

const ViewPartners = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <DefaultLayout>
      <div className="card mt-2">
        <h5 className="card-header font-weight-heavy">View Partners</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-md-10 mx-auto">
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
                  {companies.length > 0 ? (
                    companies.map(({ data, uid }, index) => {
                      return (
                        <CompanyItem
                          data={{ ...data, uid }}
                          index={index + 1}
                          key={uid}
                        />
                      );
                    })
                  ) : (
                    <tr className="danger text-center">
                      <td colSpan="5">No records found.</td>
                    </tr>
                  )}
                  {}
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
