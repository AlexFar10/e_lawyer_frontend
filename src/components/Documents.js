import React, {useState} from "react";
import axios from "axios";

function Documents() {
    const [files, setFiles] = useState([]);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const handleChange = (event) => {
        const {name, value} = event.target;

        if (name === "Name") {
            setName(value);
        } else if (name === "Surname") {
            setSurname(value);
        }
    };

    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("Name", name);
        formData.append("Surname", surname);

        for (let i = 0; i < files.length; i++) {
            formData.append("files[]", files[i]);
        }

        axios
            .post("http://localhost:3000/uploads", formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="Name" value={name} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Surname:
                    <input type="text" name="Surname" value={surname} onChange={handleChange}/>
                </label>
                <br/>
                <input type="file" onChange={handleFileChange} multiple/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Documents;
