import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            setAuth({ token });
        }
    }, []);

    const login = (token) => {
        setAuth({ token });
        localStorage.setItem("authToken", token);
    };

    const logout = () => {
        setAuth({});
        localStorage.removeItem("authToken");
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;