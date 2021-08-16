import React from 'react';

const Logout = () => {
    
    const onLogout = () => {
    }
    return (
        <a className="nav-link" href="#" onClick={onLogout}>
            <i className="fa fa-sign-out"></i> Logout
        </a>
    )
}

export default Logout
