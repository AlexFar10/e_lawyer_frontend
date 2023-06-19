import {useContext, useEffect, useRef, useState} from "react";
import AuthContext from "../context/AuthProvider";
import "../css/style.css";
import axios from "../api/axios";
import Pages from "../Pages";
import jwtDecode from "jwt-decode";

const LOGIN_URL = "http://localhost:3000/user/login";


const Login = () => {
    const {login} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [userRole, setRole] = useState("");
    const [userId, setUserId] = useState("");
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
            const accessToken = response?.data?.token;
            const userId = response?.data?.id;
            const userRole = response?.data?.role;

            setEmail("");
            setPwd("");
            setSuccess(true);
            setRole(userRole);
            setUserId(userId);
            login(accessToken, userId, userRole);
            const decodedToken = jwtDecode(accessToken);


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
    const {logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        setSuccess(false);
    };

    return (
        <>
            {success ? (
                <section className="book" id="book">
                    <div className="row">
                        <Pages Role={userRole} UserId={userId}/>
                        <button className="btn" onClick={handleLogout}>
                            Deconectare
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
                            <label htmlFor="password">Parolă:</label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                className="box"
                            />
                            <button className="btn">Conectare</button>

                        </form>

                    </div>
                </section>
            )}
        </>
    );
};

export default Login;