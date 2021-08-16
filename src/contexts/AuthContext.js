import React, { useContext, useEffect, useState, useSelector} from 'react';
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
        console.log('user logged');
    }, []);

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
