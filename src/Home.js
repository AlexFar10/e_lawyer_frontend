import React, {Component} from 'react';
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Form from "./Form";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import UserData from "./components/UserData";
import Pages from "./Pages";

class Home extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <Header/>
                <AboutUs/>
                <BrowserRouter>
                    <Routes>
                <Route exact path="/" element={<Form/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
    </BrowserRouter>
                <Footer/>

            </>
        );
    }
}

export default Home;