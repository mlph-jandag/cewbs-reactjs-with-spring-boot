import React from 'react';
import Dashboard from '../pages/dashboard/Dashboard';
import Category from '../pages/category/Category';
import UserList from '../pages/users/UserList';
import CreatePost from '../pages/posts/CreatePost';
import AuthenticatedRoute from './AuthenticatedRoute';

const AdminRoutes = () => {
    return (
        <>
            <AuthenticatedRoute exact path="/" component={Dashboard}/>
            <AuthenticatedRoute path="/categories" component={Category} />
            <AuthenticatedRoute path="/users" component={UserList} />
            <AuthenticatedRoute path="/create-post" component={CreatePost} />
        </>
    )
}

export default AdminRoutes
