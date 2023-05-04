import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import "../css/style.css";
import axios from "../api/axios";
import Pages from "../Pages";
import {Link} from "react-router-dom";
const LOGIN_URL = "http://localhost:3000/user/login";


const Login = () => {
    const { login } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [role, setRole] = useState("");
    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            setSuccess(true);


        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, {
                Email: email,
                Password: pwd,
            });
            console.log(JSON.stringify(response?.data));
            console.log(response?.data)
            const accessToken = response?.data?.accessToken;
            const role = response?.data?.role;
            console.log(role)
            login(accessToken);
            setEmail("");
            setPwd("");
            setSuccess(true);
            setRole(role)

        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Username or Password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login Failed");
            }
            errRef.current.focus();
        }
    };
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        setSuccess(false);
    };

    return (
        <>
            {success ? (
                <section className="book" id="book">
                    <div className="row">
                    <Pages Role={role}/>
                    <button className="btn" onClick={handleLogout}>
                        LogOut
                    </button>
                    </div>
                </section>
            ) : (
                <section className="book" id="book">
                    <div className="row">
                    <form onSubmit={handleSubmit}>
                        <h3>Conectare</h3>
                        <p
                            ref={errRef}
                            className={errMsg ? "errmsg" : "offscreen"}
                            aria-live="assertive"
                        >
                            {errMsg}
                        </p>
                        <label htmlFor="email" className="content">
                            Email:
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            className="box"
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            className="box"
                        />
                        <button className="btn">Log In</button>

                    </form>

                        </div>
                </section>
            )}
        </>
    );
};

export default Login;