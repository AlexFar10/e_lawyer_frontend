import React, { Component } from "react";
class ResetPwd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const email = this.state;
        console.log(email);
        fetch("http://localhost:3000/user/forgot-password", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(email),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                alert(data.status);
            });
    }
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };
    render() {
        return (
            <section className="book" id="book">
                <div className="row">
            <form onSubmit={this.handleSubmit}>
                <h3>Forgot Password</h3>
                    <label className="content">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={this.handleEmailChange}
                        className="box"
                    />
                    <button type="submit"className="btn">
                        Submit
                    </button>
            </form>
                </div>
            </section>
        );
    }
}
export default ResetPwd;