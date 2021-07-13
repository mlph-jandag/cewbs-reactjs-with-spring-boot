import React, { useContext, useEffect, useState} from 'react';
import { firebaseAuth } from '../firebase.config';
import useAuth from '../hooks/useAuth';

const AuthContext = useAuth();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);

    const login = (email, password) => {
        return firebaseAuth.signInWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged(loggedInUser => {
            setCurrentUser(loggedInUser);
            setLoading(false);
        });

        return unsubscribe;
    }, [])

    const values = {
        login,
        currentUser,
    };

    return (
        <AuthContext.Provider value={values}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
