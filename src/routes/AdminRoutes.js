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
import PostCategory from "../pages/posts/PostCategory/PostCategory";
import ViewUsers from '../pages/users/ViewUsers/ViewUsers'

const AdminRoutes = () => {
  return (
    <>
      <AuthenticatedRoute exact path="/" component={Dashboard} />
      <AuthenticatedRoute path="/categories" component={Category} />
      <AuthenticatedRoute exact path="/create-post" component={CreatePost} />
      <AuthenticatedRoute exact path="/posts/category/:cat" component={PostCategory}/>
      <AuthenticatedRoute path="/posts" component={ViewPosts} />
      <AuthenticatedRoute path="/partners" component={ViewPartners} />
      <AuthenticatedRoute path="/create-partner/:uid" component={CreatePartner}/>
      <AuthenticatedRoute exact path="/create-partner" component={CreatePartner}/>
      <AuthenticatedRoute path="/services/:uid" component={ViewServices} />
      <AuthenticatedRoute path="/services/:uid" component={ViewPartners} />
      <AuthenticatedRoute path="/create-post/:uid" component={CreatePost} />
      <AuthenticatedRoute path="/users" component={ViewUsers} />
    </>
  );
};

export default AdminRoutes;