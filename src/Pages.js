import './css/style.css'
import { useState } from 'react'
import FormComplaint from "./components/FormComplaint";
import UserData from "./components/UserData";

const Pages = ({Role}) => {
    const [showComplaintForm, setShowComplaintForm] = useState(false);
    const [showUserData, setShowUserData] = useState(false);
    const handleComplainClick = () => {
        setShowComplaintForm(prevState => !prevState);
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
                            {showComplaintForm ? "CloseComplain" : "Complain"}
                        </button>
                        {showComplaintForm && <FormComplaint />}
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