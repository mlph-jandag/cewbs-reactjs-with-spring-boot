import React, { useContext, useEffect, useState} from 'react';
import LightLoader from '../components/Loaders/LightLoader';
import { axiosAutoload } from '../api/apiHandler';
import { authInfo } from '../api/apiHandler';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchProfile = () => {
    }

    useEffect(() => {
        if (authInfo && authInfo.user) {
            console.log(authInfo.user);
            setCurrentUser(authInfo.user);
            setLoading(false);
        }
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
