import './css/style.css'
import { useState } from 'react'
import FormComplaint from "./components/FormComplaint";
import UserData from "./components/UserData";
import FormFile from "./components/FormFile";
import UserFile from "./components/UserFile";
import ClientFile from "./components/ClientFile";
import ViewComplaint from "./components/ViewComplaint";
import UserComplaint from "./components/UserComplaint";

const Pages = ({Role,UserId}) => {
    const [showComplaintForm, setShowComplaintForm] = useState(false);
    const [showFileForm, setShowFileForm] = useState(false);
    const [showUserFile, setShowUserFile] = useState(false);
    const [showUserComplaint, setShowUserComplaint] = useState(false);
    const [showClientFile, setShowClientFile] = useState(false);
    const [showClientComplaint, setShowClientComplaint] = useState(false);
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
    const handleClientFileClick = () => {
        setShowClientFile(prevState => !prevState);
    };
    const handleClientComplaintClick = () => {
        setShowClientComplaint(prevState => !prevState);
    };
    const handleUserData = () => {
        setShowUserData(prevState => !prevState);
    };

    if(Role==='client')
        return (
            <>
                <section className="book" id="book">

                    <div className="row">
                        <button className="btn" onClick={handleComplainClick}>
                            {showComplaintForm ? "Inchidere formular contestatie" : "Deschidere formular contestatie"}
                        </button>
                        {showComplaintForm && <FormComplaint user={UserId} />}
                    </div>
                    <div className="row">
                        <button className="btn" onClick={handleFileClick}>
                            {showFileForm ? "Inchidere formular fisiere" : "Deschidere formular fisiere"}
                        </button>
                        {showFileForm && <FormFile user_Id={UserId} />}
                    </div>
                    <div className="row">
                        <button className="btn" onClick={handleUserFileClick}>
                            {showUserFile ? "Inchide fisiere" : "Deschide fisiere"}
                        </button>
                        {showUserFile && <UserFile User_Id={UserId} />}
                    </div>
                    <div className="row">
                        <button className="btn" onClick={handleUserComplaintClick}>
                            {showUserComplaint ? "Inchide contestatie" : "Deschide contestatie"}
                        </button>
                        {showUserComplaint && <UserComplaint userid={UserId} />}
                    </div>
                </section>
            </>
        )

    if(Role==='lawyer')
        return (
            <>
                <section className="book" id="book">
                    <div className="row">
                        <button className="btn" onClick={handleClientFileClick}>
                            {showClientFile ? "Inchide fisiere" : "Deschide fisiere"}
                        </button>
                        {showClientFile && <ClientFile User_Id={UserId} />}
                    </div>
                </section>
                <section className="book" id="book">
                    <div className="row">
                        <button className="btn" onClick={handleClientComplaintClick}>
                            {showClientComplaint ? "Inchide fisiere" : "Deschide fisiere"}
                        </button>
                        {showClientComplaint && <ClientComplaint UserId={UserId} />}
                    </div>

                </section>
            </>
        )
    else if(Role==='admin')
        return (
            <>
                <section className="book" id="book">

                    <div className="row">
                        <button className="btn" onClick={handleUserData}>
                            {showUserData ? "CloseUserData" : "UserData"}
                        </button>
                        {showUserData && <UserData />}
                    </div>
                </section>
            </>
        )

}

export default Pages