import React from 'react';
import { firebaseAuth } from '../../firebase.config';

const Logout = () => {
    
    const onLogout = () => {
        firebaseAuth.signOut();
    }
    return (
        <a className="nav-link" href="#" onClick={onLogout}>
            <i className="fa fa-sign-out"></i> Logout
        </a>
    )
}

export default Logout
