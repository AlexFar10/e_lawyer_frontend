import React from "react";
import axios from "axios";

function App() {


    const postMultipleFile = (filelist) => {
        const formdata = new FormData();
        for (let index = 0; index < filelist.length; index++) {
            const file = filelist[index];
            formdata.append("file", file);
        }
        postFiles(formdata);
    };

    const postFiles = async (formdata) => {

        axios
            .post(`http://localhost:3000/file`, formdata)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>


            <input
                type="file"
                multiple
                onChange={(event) => {
                    const filelist = event.target.files;
                    postMultipleFile(filelist);
                }}
            ></input>
        </div>
    );
}

export default App;