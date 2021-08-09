import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const Sidebar = () => {
    const { pathname } = useLocation();

    const partnersRoutes = ['/partners', '/create-partner']; 
    const postRoutes = ['/create-post', '/posts'];

    const [showPost, setShowPost] = useState(postRoutes.includes(pathname));
    const [showPartners, setshowPartners] = useState(partnersRoutes.includes(pathname));

    return (
        <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">
            <ul className="list-group">
                <Link to="/" data-toggle="collapse" aria-expanded="false" className="main-menu list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="fa fa-dashboard fa-fw mr-3"></span>
                        <span className="menu-collapsed">Dashboard</span>
                    </div>
                </Link>
                <a onClick={() => setShowPost(!showPost)} data-toggle="collapse" aria-expanded="false" className="main-menu list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="fa fa-sticky-note-o  fa-fw mr-3"></span>
                        <span className="menu-collapsed">Post</span>
                        <span className="submenu-icon ml-auto"></span>
                    </div>
                </a>
                <div className={!showPost ? 'collapse' : ''}>
                    <Link to="/create-post" className="list-group-item list-group-item-action  ">
                        <span className="menu-collapsed">Add New</span>
                    </Link>
                    <Link to="/posts" className="list-group-item list-group-item-action ">
                        <span className="menu-collapsed">View Posts</span>
                    </Link>
                </div>
                <Link to="/categories" aria-expanded="false" className="main-menu list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="fa fa-list-alt fa-fw mr-3"></span>
                        <span className="menu-collapsed">Category</span>
                    </div>
                </Link>
                <Link to="/users" aria-expanded="false" className="main-menu list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="fa fa-user fa-fw mr-3"></span>
                        <span className="menu-collapsed">Users</span>
                    </div>
                </Link>
                <Link to="/partners" aria-expanded="false" className="main-menu list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="fa fa-sticky-note-o fa-fw mr-3"></span>
                        <span className="menu-collapsed">Partners</span>
                    </div>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar
