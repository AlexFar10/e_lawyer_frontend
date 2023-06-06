import {createContext, useEffect, useState} from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const userId = localStorage.getItem("userId");
        const userRole = localStorage.getItem("userRole");

        if (token && userId && userRole) {
            setAuth({ token, userId, userRole });
        }
    }, []);

    const login = (token, userId, userRole) => {
        setAuth({token, userId, userRole});
        localStorage.setItem("authToken", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userRole", userRole);
    };

    const logout = () => {
        setAuth({});
        localStorage.removeItem("authToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("userRole");
    };

    return (
        <AuthContext.Provider value={{auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;