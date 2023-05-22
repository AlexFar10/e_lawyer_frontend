import "../css/style.css"
import axios from "axios";
import {useEffect, useState} from "react";
import ViewComplaint from "./ViewComplaint";
import EditComplaint from "./EditComplaint";

const UserData = (UserID) => {
    const [users, setUsers] = useState([]);
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
    console.log(UserID.userid)
    useEffect(() => {
        axios.get(`http://localhost:3000/complaint/userid/${UserID.userid}`)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    async function deleteUser(id) {
        try {
            await axios.delete(`http://localhost:3000/complaint/${id}`);
            setUsers(users.filter((user) => user._id !== id));
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
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className="content"><label>{user.Title}</label></td>
                            <td className="content"><label>{user.Observations}</label></td>
                            <td className="content"><label>{user.Status}</label></td>
                            <td className="content">
                                <button className="btn" onClick={handleOpenEdit}>Editare</button>
                                {isOpenEdit && (
                                    <div className="modal-overlay">
                                        <div className="modal-content">
                                            <EditComplaint Id={user._id}/>
                                            <button onClick={handleCloseEdit}>Inchide</button>
                                        </div>
                                    </div>
                                )}
                                <button className="btn" onClick={handleOpenView}>Cizualizare</button>
                                {isOpenView && (
                                    <div className="modal-overlay">
                                        <div className="modal-content">
                                            <ViewComplaint id={user._id}/>
                                            <button onClick={handleCloseView}>Inchide</button>
                                        </div>
                                    </div>
                                )}
                                <button className="btn" onClick={() => deleteUser(user._id)}>Delete</button>
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