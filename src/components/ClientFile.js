import "../css/style.css"
import axios from "axios";
import {useEffect, useState} from "react";

const ClientFile = () => {
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

    async function deleteUser(id) {
        try {
            await axios.delete(`http://localhost:3000/user/${id}`);
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
                        <th className="content"><h3>Nume</h3></th>
                        <th className="content"><h3>Prenume</h3></th>
                        <th className="content"><h3>Email</h3></th>
                        <th className="content"><h3>Rol</h3></th>
                        <th className="content"><h3>Sterge</h3></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className="content"><label>{user.Name}</label></td>
                            <td className="content"><label>{user.Surname}</label></td>
                            <td className="content"><label>{user.Email}</label></td>
                            <td className="content"><label>{user.Role}</label></td>
                            <td className="content">
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

export default ClientFile