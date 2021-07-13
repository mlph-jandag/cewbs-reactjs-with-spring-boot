import React from 'react';
import logo from '../../assets/images/logo.png';
import Logout from './Logout';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
    const { currentUser } = useAuth();
    return (
        <nav className="navbar navbar-expand-md navbar-dark">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand">
                <img src={ logo } width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
                <span className="menu-collapsed">{ process.env.REACT_APP_NAME }</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <form className="form-inline">
                    <input className="form-control mr-sm-2 border-radius-0" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0 btn-search" type="submit">Search</button>
                </form>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link">
                            Welcome, <i className="fa fa-user"></i> { currentUser.email }
                        </a>
                    </li>
                    <li className="nav-item">
                        <Logout />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
