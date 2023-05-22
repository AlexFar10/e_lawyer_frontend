import React, {useEffect, useState} from 'react';

const FileList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        try {
            const response = await fetch('http://localhost:3000/file');
            const data = await response.json();
            setFiles(data);
        } catch (error) {
            console.error('Failed to fetch files:', error);
        }
    };

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
        <div>
            <h2>Files</h2>
            <ul>
                {files.map((file) => (
                    <li key={file._id}>
                        <span>{file.filename}</span>
                        <button onClick={() => handleFileDownload(file.filename)}>Download</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;