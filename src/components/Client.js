import "../css/style.css"
import axios from "axios";
import {useEffect, useState} from "react";
import EditComplaint from "./EditComplaint";
import ViewComplaint from "./ViewComplaint";
import {Link} from "react-router-dom";

const Client = ({UserID}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/user')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="book" id="book">
            <div className="row">
                <table>
                    <thead>
                    <tr>
                        <th className="content"><h3>Nume</h3></th>
                        <th className="content"><h3>Prenume</h3></th>
                        <th className="content"><h3>Email</h3></th>
                        <th className="content"><h3>Dosar</h3></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => {
                        if (user.Role === 'client') {
                            return (
                                <tr key={user._id}>
                                    <td className="content"><label>{user.Name}</label></td>
                                    <td className="content"><label>{user.Surname}</label></td>
                                    <td className="content"><label>{user.Email}</label></td>
                                    <td className="content">  <Link to={`/usercomplaint/${user.Email}`} activeclassname="current"><button className="btn">Deschide</button></Link></td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                    </tbody>
                </table>
            </div>
        </section>

    )

}

export default Client