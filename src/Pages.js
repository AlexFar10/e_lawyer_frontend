import './css/style.css'
import React, {useState} from 'react'
import { useContext } from "react";
import AuthContext from "./context/AuthProvider";
import FormComplaint from "./components/FormComplaint";
import UserData from "./components/UserData";
import FormFile from "./components/FormFile";
import UserFile from "./components/UserFile";
import Client from "./components/Client";
import UserComplaint from "./components/UserComplaint";
import {Link} from "react-router-dom";
import ClientComplaint from "./components/ClientComplaint";

const Pages = () => {
    const { auth, login, logout } = useContext(AuthContext);
    const { token, userId, userRole } = auth;
    const [showComplaintForm, setShowComplaintForm] = useState(false);
    const [showFileForm, setShowFileForm] = useState(false);
    const [showUserFile, setShowUserFile] = useState(false);
    const [showUserComplaint, setShowUserComplaint] = useState(false);
    const [showClient, setShowClient] = useState(false);
    const [showUserData, setShowUserData] = useState(false);

    const handleComplainClick = () => {
        setShowComplaintForm(prevState => !prevState);
    };

    const handleFileClick = () => {
        setShowFileForm(prevState => !prevState);
    };
    const handleUserFileClick = () => {
        setShowUserFile(prevState => !prevState);
    };

    const handleUserComplaintClick = () => {
        setShowUserComplaint(prevState => !prevState);
    };

    const handleClientClick = () => {
        setShowClient(prevState => !prevState);
    };

    const handleUserData = () => {
        setShowUserData(prevState => !prevState);
    };

    if (userRole === 'client')
        return (
            <>
                <section className="book" id="book">

                    <div className="row">
                        <button className="btn" onClick={handleComplainClick}>
                            {showComplaintForm ? "Inchidere formular contestatie" : "Deschidere formular contestatie"}
                        </button>
                        {showComplaintForm && <FormComplaint user={userId}/>}
                    </div>
                    <div className="row">
                        <button className="btn" onClick={handleFileClick}>
                            {showFileForm ? "Inchidere formular fisiere" : "Deschidere formular fisiere"}
                        </button>
                        {showFileForm && <FormFile user_Id={userId}/>}
                    </div>
                    <div className="row">
                        <button className="btn" onClick={handleUserFileClick}>
                            {showUserFile ? "Inchide fisiere" : "Deschide fisiere"}
                        </button>
                        {showUserFile && <UserFile User_Id={userId}/>}
                    </div>
                    <div className="row">
                        <button className="btn" onClick={handleUserComplaintClick}>
                            {showUserComplaint ? "Inchide lista" : "Deschide lista"}
                        </button>
                        {showUserComplaint && <ClientComplaint userid={userId}/>}
                    </div>


                </section>
            </>
        )

    if (userRole === 'avocat')
        return (
            <>
                <section className="book" id="book">
                    <div className="row">
                        <button className="btn" onClick={handleClientClick}>
                            {showClient ? "Inchide lista clienti" : "Deschide lista clienti"}
                        </button>
                        {showClient && <Client User_Id={userId}/>}
                    </div>
                </section>
            </>
        )
    else if (userRole === 'admin')
        return (
            <>
                <section className="book" id="book">

                    <div className="row">
                        <button className="btn" onClick={handleUserData}>
                            {showUserData ? "CloseUserData" : "UserData"}
                        </button>
                        {showUserData && <UserData/>}
                    </div>
                </section>
            </>
        )

}

export default Pages