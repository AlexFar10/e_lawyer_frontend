import React, {useEffect, useState} from 'react';
import '../css/style.css';
import axios from "axios";

const FileList = ({User_Id}) => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        try {
            const response = await fetch(`http://localhost:3000/file/user/${User_Id}`);
            const data = await response.json();
            setFiles(data);
            console.log(response)
        } catch (error) {
            console.error('Failed to fetch files:', error);
        }
    };
    async function handleFileDelete(id) {
        try {
            await axios.delete(`http://localhost:3000/file/${id}`);
            setFiles(files.filter((files) => files._id !== id));
        } catch (error) {
            console.log(error);
        }
    }
    const handleFileDownload = (filename) => {
        const saveAs = (uri, filename) => {
            const link = document.createElement('a');
            link.href = uri;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        fetch(`http://localhost:3000/file/download/${filename}`)
            .then((response) => response.blob())
            .then((blob) => {
                const url = URL.createObjectURL(blob);
                saveAs(url, filename);
            })
            .catch((error) => {
                console.error('File download failed:', error);
            });
    };

    return (
        <section className="book" id="book">
            <div className="row">
                <table>
                    <thead>
                    <tr>
                        <th className="content">
                            <h3>Nume</h3>
                        </th>
                        <th className="content">
                            <h3>Observatii</h3>
                        </th>
                        <th className="content">
                            <h3>Descarcare</h3>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {files.map((file) => (
                        <tr key={file._id}>
                            <td className="content">
                                <label>{file.filename}</label>
                            </td>
                            <td className="content">
                                <label>{file.Observations}</label>
                            </td>
                            <td className="content">
                                <button
                                    className="btn"
                                    onClick={() => handleFileDownload(file.filename)}
                                >
                                    Download
                                </button>
                                <button
                                    className="btn"
                                    onClick={() => handleFileDelete(file._id)}
                                >
                                    Stergere
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default FileList;
