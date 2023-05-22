import {useEffect, useRef, useState} from "react";
import {faCheck, faInfoCircle, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import '../css/style.css'
import Login from "./Login";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-={}|[\]\\;:'",.<>\/?]).{8,}$/;
const REGISTER_URL = 'http://localhost:3000/user/signup';


const Form = () => {


    const userRef = useRef();
    const errRef = useRef();

    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [Name, Surname, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v2 = PWD_REGEX.test(pwd);
        if (!v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                {
                    Name: Name,
                    Surname: Surname,
                    Email: Email,
                    Password: pwd
                })
            ;
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            setName('');
            setSurname('');
            setEmail('');
            setPwd('');
            setMatchPwd('');

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
                console.log(err)
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
                console.log(err)
            } else {
                setErrMsg('Registration Failed')
                console.log(err)
            }
            errRef.current.focus();
        }
    }

    return (
        <> {success ? (
            <section className="book" id="book">
                <div className="row">
                    <Login/>
                </div>
            </section>

        ) : (
            <section className="book" id="book">
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <h3>Creare cont</h3>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <label htmlFor="name">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                            value={Name}
                            required
                            aria-describedby="uidnote"
                            className="box"/>
                        <label htmlFor="surname">
                            Surname:
                        </label>
                        <input
                            type="text"
                            id="surname"
                            autoComplete="off"
                            onChange={(e) => setSurname(e.target.value)}
                            value={Surname}
                            required
                            aria-describedby="uidnote"
                            className="box"/>

                        <label htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off"
                            value={Email}
                            ref={userRef}
                            required
                            className="box"/>
                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"}/>
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"}/>
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            className="box"/>
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            8 to 32 characters.<br/>
                            Must include uppercase and lowercase letters, a number and a special character.<br/>
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span
                            aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span
                            aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"}/>
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"}/>
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            className="box"
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            Must match the first password input field.
                        </p>
                        <button className="btn">Sign Up</button>

                    </form>


                </div>
            </section>

        )}
        </>
    )
}

export default Form