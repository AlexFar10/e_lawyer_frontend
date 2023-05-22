import React, {Component} from 'react';
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Form from "./Form";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPwd from "./components/ResetPwd";

class Home extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <Header/>
                <AboutUs/>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Form/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/reset" element={<ResetPwd/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer/>

            </>
        );
    }
}

export default Home;