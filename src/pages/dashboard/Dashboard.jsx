import React from 'react';
import CategoryButtons from '../../components/Buttons/CategoryButtons';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import RecentPosts from '../../components/Posts/RecentPosts';
import LoggedUser from '../../components/Users/LoggedUser';

const Dashboard = () => {
  return (
    <DefaultLayout>
      <CategoryButtons />
      <div className="row">
        <div className="col-7">
          <div className="card mt-5">
            <h5 className="card-header font-weight-light">
              <i className="fa fa-sticky-note fa-fw mr-1"></i>Recent Posts
            </h5>
            <div className="card-body">
                <RecentPosts />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mt-5">
            <h5 className="card-header font-weight-light">
              <i className="fa fa-user"></i>  Logged in Account
            </h5>
            <div className="card-body">
              <LoggedUser />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Dashboard
