import React from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import Category from "../pages/category/Category";
import UserList from "../pages/users/UserList";
import CreatePost from "../pages/posts/CreatePost/CreatePost";
import AuthenticatedRoute from "./AuthenticatedRoute";
import CreatePartner from "../pages/partners/CreatePartner/CreatePartner";
import ViewPartners from "../pages/partners/ViewPartners/ViewPartners.jsx";
import ViewPosts from "../pages/posts/ViewPost/ViewPost";
import ViewServices from "../pages/services/ViewServices/ViewServices";

const AdminRoutes = () => {
  return (
    <>
      <AuthenticatedRoute exact path="/" component={Dashboard} />
      <AuthenticatedRoute path="/categories" component={Category} />
      <AuthenticatedRoute path="/users" component={UserList} />
      <AuthenticatedRoute exact path="/create-post" component={CreatePost} />
      <AuthenticatedRoute path="/posts" component={ViewPosts} />
      <AuthenticatedRoute path="/partners" component={ViewPartners} />
      <AuthenticatedRoute path="/create-partner/:uid" component={CreatePartner}/>
      <AuthenticatedRoute exact path="/create-partner" component={CreatePartner}/>
      <AuthenticatedRoute path="/services/:uid" component={ViewServices} />
      <AuthenticatedRoute path="/services/:uid" component={ViewPartners} />
      <AuthenticatedRoute path="/create-post/:uid" component={CreatePost} />
    </>
  );
};

export default AdminRoutes;