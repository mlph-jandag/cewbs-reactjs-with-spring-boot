import React from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    console.log(process.env);
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
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link">
                            Welcome, <i className="fa fa-user"></i> Joe
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#top">
                            <i className="fa fa-sign-out"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
