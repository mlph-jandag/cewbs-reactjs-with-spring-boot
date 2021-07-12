import React from 'react';

const Sidebar = () => {
    return (
        <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">
            <ul className="list-group">
                <a href="#submenu1" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="fa fa-dashboard fa-fw mr-3"></span>
                        <span className="menu-collapsed">Dashboard</span>
                    </div>
                </a>
                <a href="#" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="fa fa-sticky-note-o  fa-fw mr-3"></span>
                        <span className="menu-collapsed">Post</span>
                        <span className="submenu-icon ml-auto"></span>
                    </div>
                </a>
                <a href="#" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="fa fa-list-alt fa-fw mr-3"></span>
                        <span className="menu-collapsed">Category</span>
                        <span className="submenu-icon ml-auto"></span>
                    </div>
                </a>
                <a href="#submenu2" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="fa fa-user fa-fw mr-3"></span>
                        <span className="menu-collapsed">Users</span>
                        <span className="submenu-icon ml-auto"></span>
                    </div>
                </a>
            </ul>
        </div>
    )
}

export default Sidebar
