import React, {Component} from 'react';
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPwd from "./components/ResetPwd";
import ClientComplaint from "./components/ClientComplaint";
import EditComplaint from "./components/EditComplaint";
import ViewComplaint from "./components/ViewComplaint";
import NewPwd from "./components/NewPwd";
import WordDoc from "./components/WordDoc";
import Form from "./Form";
import LawyerComplaint from "./components/LawyerComplaint";

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
                        <Route path="/usercomplaint/:email" element={<LawyerComplaint/>}/>
                        <Route path="/edit/:complaintId" element={<EditComplaint/>}/>
                        <Route path="/view/:complaintId/:complaintPoliceInstitution" element={<ViewComplaint/>}/>
                        <Route path="/reset-password/:email/:token" element={<NewPwd/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer/>

            </>
        );
    }
}

export default Home;