import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../css/style.css';

function NewPwd() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { token } = useParams();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.patch(`http://localhost:3000/user/reset-password/${email}/${token}`, {
                password:password,
                passwordConfirm: confirmPassword,
            });

            alert("Your password has been reset. Please log in with your new password.");

        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <section className="book" id="book">
            <div className="row">
        <form  onSubmit={handleSubmit}>
            <label className="content">Email address</label>
            <input
                type="email"

                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="box"
            />
            <label className="content">Password</label>
            <input
                type="password"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="box"
            />
            <label className="content">Confirm Password</label>
            <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="box"
            />
            <button  className="btn" type="submit">
                Submit
            </button>
        </form>
            </div>
            </section>
    );
}

export default NewPwd;
