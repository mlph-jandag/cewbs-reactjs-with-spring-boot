import React, { useContext, useEffect, useState} from 'react';
import LightLoader from '../components/Loaders/LightLoader';
import { axiosAutoload } from '../api/apiHandler';
import { authInfo } from '../api/apiHandler';
import { useHistory } from 'react-router';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (authInfo && authInfo.user) {
            setCurrentUser(authInfo.user);
        } else {
            history.push('/login');
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
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;
