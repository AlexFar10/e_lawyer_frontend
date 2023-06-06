import "../css/style.css"
import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
const UserData = () => {
    const [complaint, setComplaint] = useState([]);
    const { email } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/complaint/useremail/${email}`)
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
                                <Link to={`/edit/${complaint._id}`} activeclassname="current"><button className="btn" >Editare</button></Link>
                                <Link to={`/view/${complaint._id}`} activeclassname="current"><button className="btn" >Vizualizare</button></Link>
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