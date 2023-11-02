import React, { createContext, useState, useContext, useEffect } from "react";

// Creating the authentication context
const AuthContext = createContext();

// Authentication Provider component
export const AuthProvider = ({ children }) => {
    // Local state for managing the user's login status
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Check if 'isLoggedIn' status is stored in local storage, if yes then parse it, else set default as false
        const savedStatus = localStorage.getItem("isLoggedIn");
        return savedStatus ? JSON.parse(savedStatus) : false;
    });

    // useEffect hook to monitor changes in 'isLoggedIn' status
    useEffect(() => {
        // Save the 'isLoggedIn' status in local storage whenever it changes
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    return (
        // Provide the 'isLoggedIn' state and its updater function to children components
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for easy consumption of authentication status and its updater function
export const useAuth = () => {
    return useContext(AuthContext);
};
