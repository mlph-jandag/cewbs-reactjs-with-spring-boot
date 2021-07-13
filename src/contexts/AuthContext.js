import React, { useContext, useEffect, useState} from 'react';
import { firebaseAuth } from '../firebase.config';
import LightLoader from '../components/Loaders/LightLoader';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('loading..');
        const unsubscribe = firebaseAuth.onAuthStateChanged(loggedInUser => {
            console.log('done');
            setCurrentUser(loggedInUser);
            setLoading(false);
        });

        return unsubscribe;
    }, [])

    const values = {
        currentUser,
        loading,
    };

    const display = () => {
        if (!loading) {
            return children;
        } else {
            return <LightLoader />
        }
    }

    return (
        <AuthContext.Provider value={values}>
            { display() }
        </AuthContext.Provider>
    )
}

export default AuthProvider;
