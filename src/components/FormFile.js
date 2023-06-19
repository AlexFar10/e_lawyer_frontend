import React, {useState} from 'react';
import axios from '../api/axios';
import '../css/style.css';

const FORM_URL = 'http://localhost:3000/file';

const FormFile = ({user_Id}) => {
    const [filelist, setFilelist] = useState();
    const [observations, setObservations] = useState('');

    const postMultipleFile = (filelist) => {
        const formdata = new FormData();
        for (let index = 0; index < filelist.length; index++) {
            const file = filelist[index];
            formdata.append('file', file);
        }
        formdata.append('Observations', observations); // Append observations to form data
        formdata.append('UserID', user_Id);
        postFiles(formdata);
    };

    const postFiles = async (formdata) => {
        try {
            const response = await axios.post(FORM_URL, formdata);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting normally
        postMultipleFile(filelist);
    };

    return (
        <section className="book" id="book">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <label className="content">Introducere fișiere:</label>
                    <input
                        className="box"
                        type="file"
                        multiple
                        onChange={(event) => {
                            setFilelist(event.target.files);
                        }}
                    />
                    <label className="content">Observații:</label>
                    <input
                        className="box"
                        type="text"
                        value={observations}
                        onChange={(event) => {
                            setObservations(event.target.value);
                        }}
                    />
                    <button className="btn" type="submit">
                        Adaugare
                    </button>
                </form>
            </div>
        </section>
    );
};

export default FormFile;
