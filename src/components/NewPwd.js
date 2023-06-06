import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
        <form  onSubmit={handleSubmit}>
            <label className="content">Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="box"
            />
            <input
                type="password"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <button  type="submit">
                Submit
            </button>
        </form>
    );
}

export default NewPwd;
