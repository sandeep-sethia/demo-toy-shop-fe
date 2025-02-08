import React, { createContext, useState, useEffect } from 'react';
import { getToken, logout } from '../services/api/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (getToken()) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
