import React, { useEffect } from 'react';
import firebaseApp from '../../firebase.config';

const Logout = () => {
    
    useEffect(() => {
        authListener();
      }, []);
    
    const authListener = () => {
    firebaseApp.auth().onAuthStateChanged(response => {
        console.log('set', response);
    });
    }

    const onLogout = () => {
        firebaseApp.auth().signOut();
    }
    return (
        <a className="nav-link" href="#" onClick={onLogout}>
            <i className="fa fa-sign-out"></i> Logout
        </a>
    )
}

export default Logout
