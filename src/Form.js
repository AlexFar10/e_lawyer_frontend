import './css/style.css'
import {Link} from 'react-router-dom';
import WordDoc from "./components/WordDoc";
import {PDFDownloadLink} from "@react-pdf/renderer";
import React, {useState} from "react";

const Form = ({login}) => {
    return (
        <>
            <section className="book" id="book">
                <div className="row">

                    <table>
                        <tbody>
                        <tr>
                            <td rowSpan="2"><Link to="/register" className="btn">
                                Creare cont
                            </Link></td>
                            <td><Link to="/login" className="btn">
                                Conectare
                            </Link></td>
                        </tr>
                        <tr>
                            <td><Link to="/reset" className="btn">
                                Resetare parola
                            </Link></td>
                        </tr>

                        </tbody>
                    </table>


                </div>
            </section>
        </>
    )
}

export default Form
