import React from 'react';
import logo from '../../assets/images/logo.png';

const BlankLayout = ({ children }) => {
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand">
                <img src={ logo } width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
                <span className="menu-collapsed">{ process.env.REACT_APP_NAME }</span>
            </a>
        </nav>
            <div className="app-body">
                { children }
            </div>
        </>
    )
}

export default BlankLayout
