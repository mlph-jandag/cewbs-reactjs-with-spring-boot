import React from "react";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";

const ViewPartners = () => {
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
                  <tr className="align-middle">
                    <td>1</td>
                    <td>
                      <a href="#" class="avatar">
                        <img
                          alt="company"
                          src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"
                        />
                      </a>
                    </td>
                    <td>Maxicare</td>
                    <td>maxicare.com.ph</td>
                    <td>
                      <a href="#" className="text-info mr-2">
                        <i className="fa fa-eye"></i>
                      </a>
                      <a href="#" className="text-warning mr-2">
                        <i className="fa fa-pencil"></i>
                      </a>
                      <a href="#" className="text-danger">
                        <i className="fa fa-trash-o"></i>
                      </a>
                    </td>
                  </tr>
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
