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
                alert("Verifică email-ul pentru resetarea parolei.");
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
                    <h3>Resetare parolă</h3>
                    <label className="content">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => setResetEmail(e.target.value)}
                        value={resetEmail}
                        className="box"
                    />
                    <button type="submit" className="btn">
                        Trimite
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ResetPwd;
