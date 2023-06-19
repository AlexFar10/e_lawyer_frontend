import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../css/style.css';
import { faCheck, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NewPwd() {
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-={}|[\]\\;:'",.<>\/?]).{8,}$/;
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { token } = useParams();
    const errRef = useRef();
    const userRef = useRef();
    const [validPwd, setValidPwd] = useState(false);
    const [validMatch, setValidMatch] = useState(false);
    const [matchPwd, setMatchPwd] = useState('');
    const [matchFocus, setMatchFocus] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.patch(`http://localhost:3000/user/reset-password/${email}/${token}`, {
                password: password,
                passwordConfirm: confirmPassword,
            });

            alert("Parolă resetată. Conectează-te folosind noua parolă.");

        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error);
            alert("A apărut o eroare. Te rugăm să încerci din nou.");
        }
    };

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === confirmPassword);
    }, [password, confirmPassword]);

    useEffect(() => {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }, []);

    return (
        <section className="book" id="book">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        value={email}
                        required
                        className="box"
                        ref={userRef}
                    />
                    <label htmlFor="password">
                        Parolă:
                        <FontAwesomeIcon
                            icon={validPwd ? faCheck : faTimes}
                            className={validPwd || !password ? "valid" : "invalid"}
                        />
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        className="box"
                    />
                    <p id="pwdnote" className={!validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        între 8 și 32 de caractere.<br />
                        Trebuie să includă litere mari, litere mici, un număr și un caracter special.<br />
                        Caractere speciale acceptate: <span aria-label="exclamation mark">!</span> <span
                        aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span
                        aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
                    <label htmlFor="confirm_pwd">
                        Confirmare parolă:
                        <FontAwesomeIcon
                            icon={validMatch && confirmPassword ? faCheck : faTimes}
                            className={validMatch || !confirmPassword ? "valid" : "invalid"}
                        />
                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        className="box"
                    />
                    <p id="confirmnote" className={!validMatch ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Parolele nu sunt la fel.
                    </p>
                    <button className="btn" type="submit">
                        Trimite
                    </button>
                </form>
            </div>
        </section>
    );
}

export default NewPwd;