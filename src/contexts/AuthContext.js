import React, { useContext, useEffect, useState} from 'react';
import LightLoader from '../components/Loaders/LightLoader';
import { useSelector } from 'react-redux';
import { getAxios } from '../api/apiHandler';
import { authInfo } from '../api/apiHandler';
import { useHistory } from 'react-router';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState({});
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getAxios('/me')
        .then(resp => {
            const { data } = resp;
            const { authorities } = data;
            const roleData = authorities.map((role, index) => role.authority);
            setCurrentUser(data);
            setRoles(roleData);
            setLoading(false);
        })
        .catch(err => {
            history.push('/login');
            setLoading(false);
        });
    }, [])

    const values = {
        currentUser,
        loading,
        roles
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
