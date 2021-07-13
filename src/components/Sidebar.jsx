import React, { useState } from 'react';

const Sidebar = () => {
    const [showPost, setShowPost] = useState(false);
    const [showCategory, setShowCategory] = useState(false);
    const [showUser, setshowUser] = useState(false);

    return (
        <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">
            <ul className="list-group">
                <a href="#submenu1" data-toggle="collapse" aria-expanded="false" className="main-menu list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="fa fa-dashboard fa-fw mr-3"></span>
                        <span className="menu-collapsed">Dashboard</span>
                    </div>
                </a>
                <a onClick={() => setShowPost(!showPost)} data-toggle="collapse" aria-expanded="false" className="main-menu list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="fa fa-sticky-note-o  fa-fw mr-3"></span>
                        <span className="menu-collapsed">Post</span>
                        <span className="submenu-icon ml-auto"></span>
                    </div>
                </a>
                <div className={!showPost ? 'collapse' : ''}>
                    <a href="#" className="list-group-item list-group-item-action  ">
                        <span className="menu-collapsed">Add New</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action  ">
                        <span className="menu-collapsed">View Posts</span>
                    </a>
                </div>
                <a  onClick={() => setShowCategory(!showCategory)} data-toggle="collapse" aria-expanded="false" className="main-menu list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="fa fa-list-alt fa-fw mr-3"></span>
                        <span className="menu-collapsed">Category</span>
                        <span className="submenu-icon ml-auto"></span>
                    </div>
                </a>
                <div className={!showCategory ? 'collapse' : ''}>
                    <a href="#" className="list-group-item list-group-item-action  ">
                        <span className="menu-collapsed">Add New</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action  ">
                        <span className="menu-collapsed">View Categories</span>
                    </a>
                </div>
                <a onClick={() => setshowUser(!showUser)}  data-toggle="collapse" aria-expanded="false" className="main-menu list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="fa fa-user fa-fw mr-3"></span>
                        <span className="menu-collapsed">Users</span>
                        <span className="submenu-icon ml-auto"></span>
                    </div>
                </a>
                <div className={!showUser ? 'collapse': ''}>
                    <a href="#" className="list-group-item list-group-item-action  ">
                        <span className="menu-collapsed">Add New</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action  ">
                        <span className="menu-collapsed">View Users</span>
                    </a>
                </div>
            </ul>
        </div>
    )
}

export default Sidebar
