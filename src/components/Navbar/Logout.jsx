import React from 'react';
import { useHistory } from 'react-router';
import { STORAGE_NAME } from '../../config/AppConfig';

const Logout = () => {
    const history = useHistory();
    
    const onLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem(STORAGE_NAME);
        history.push('/login');
    }
    return (
        <a className="nav-link" href="#" onClick={onLogout}>
            <i className="fa fa-sign-out"></i> Logout
        </a>
    )
}

export default Logout
