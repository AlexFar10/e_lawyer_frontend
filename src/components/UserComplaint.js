import "../css/style.css"
import axios from "axios";
import {useEffect, useState} from "react";
import ViewComplaint from "./ViewComplaint";
import EditComplaint from "./EditComplaint";

const UserData = (UserID) => {
    const [complaint, setComplaint] = useState([]);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenView, setIsOpenView] = useState(false);

    const handleOpenEdit = () => {
        setIsOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setIsOpenEdit(false);
    };
    const handleOpenView = () => {
        setIsOpenView(true);
    };

    const handleCloseView = () => {
        setIsOpenView(false);
    };
    useEffect(() => {
        axios.get(`http://localhost:3000/complaint/userid/${UserID.userid}`)
            .then((response) => {
                setComplaint(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    async function deleteComplaint(id) {
        try {
            await axios.delete(`http://localhost:3000/complaint/${id}`);
            setComplaint(complaint.filter((complaint) => complaint._id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="book" id="book">
            <div className="row">
                <table>
                    <thead>
                    <tr>
                        <th className="content"><h3>Titlu</h3></th>
                        <th className="content"><h3>Observatii</h3></th>
                        <th className="content"><h3>Status</h3></th>
                        <th className="content"><h3>Gestionare</h3></th>
                    </tr>
                    </thead>
                    <tbody>
                    {complaint.map((complaint) => (
                        <tr key={complaint._id}>
                            <td className="content"><label>{complaint.Title}</label></td>
                            <td className="content"><label>{complaint.Observations}</label></td>
                            <td className="content"><label>{complaint.Status}</label></td>
                            <td className="content">
                                <button className="btn" onClick={handleOpenEdit}>Editare</button>
                                {isOpenEdit && (
                                    <div className="modal-overlay">
                                        <div className="modal-content">
                                            <EditComplaint Id={complaint._id}/>
                                            <button onClick={handleCloseEdit}>Inchide</button>
                                        </div>
                                    </div>
                                )}
                                <button className="btn" onClick={handleOpenView}>Vizualizare</button>
                                {isOpenView && (
                                    <div className="modal-overlay">
                                        <div className="modal-content">
                                            <ViewComplaint id={complaint._id}/>
                                            <button onClick={handleCloseView}>Inchide</button>
                                        </div>
                                    </div>
                                )}
                                <button className="btn" onClick={() => deleteComplaint(complaint._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        </section>
    )

}

export default UserData