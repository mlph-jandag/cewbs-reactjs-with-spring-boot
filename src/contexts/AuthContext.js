import React, { useContext, useEffect, useState} from 'react';
import { firebaseAuth } from '../firebase.config';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}


const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged(loggedInUser => {
            setCurrentUser(loggedInUser);
            setLoading(false);
        });

        return unsubscribe;
    }, [])

    const values = {
        currentUser,
    };

    return (
        <AuthContext.Provider value={values}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
