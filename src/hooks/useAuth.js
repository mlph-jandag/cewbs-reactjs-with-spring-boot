import React from 'react';

const AuthContext = React.createContext();


const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;