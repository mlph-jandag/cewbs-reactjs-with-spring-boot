import React from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import Category from "../pages/category/Category";
import UserList from "../pages/users/UserList";
import CreatePost from "../pages/posts/CreatePost";
import AuthenticatedRoute from "./AuthenticatedRoute";
import CreatePartner from "../pages/partners/CreatePartner/CreatePartner";
import ViewPartners from "../pages/partners/ViewPartners/ViewPartners.jsx";

const AdminRoutes = () => {
  return (
    <>
      <AuthenticatedRoute exact path="/" component={Dashboard} />
      <AuthenticatedRoute path="/categories" component={Category} />
      <AuthenticatedRoute path="/users" component={UserList} />
      <AuthenticatedRoute path="/create-post" component={CreatePost} />
      <AuthenticatedRoute path="/partners" component={ViewPartners} />
      <AuthenticatedRoute path="/create-partner/:uid" component={CreatePartner} />
      <AuthenticatedRoute path="/create-partner"  component={CreatePartner} />
      <AuthenticatedRoute path="/services/:uid" component={ViewPartners} />
    </>
  );
};

export default AdminRoutes;
