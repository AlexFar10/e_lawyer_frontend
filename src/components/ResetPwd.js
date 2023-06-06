import React, { useState } from "react";
import axios from "axios";

const ResetPwd = () => {
    const [resetEmail, setResetEmail] = useState("");

    const handlePasswordReset = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/user/forgot-password", {
                email: resetEmail,
            });
            if (response.data.success) {
                alert("Please check your email for password reset link.");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <section className="book" id="book">
            <div className="row">
                <form onSubmit={handlePasswordReset}>
                    <h3>Forgot Password</h3>
                    <label className="content">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => setResetEmail(e.target.value)}
                        value={resetEmail}
                        className="box"
                    />
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ResetPwd;
