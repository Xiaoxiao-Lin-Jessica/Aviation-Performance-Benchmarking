import React, {createContext, useState, useContext, useEffect} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Get state from localStorage.
        const savedStatus = localStorage.getItem("isLoggedIn");
        return savedStatus ? JSON.parse(savedStatus) : false;
    });

    useEffect(() => {
        // Save isLoggedIn to localStorage when it changed.
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    return useContext(AuthContext);
};
