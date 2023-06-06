import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/style.css";
import { useParams} from 'react-router-dom';
import WordDoc from "./WordDoc";
const ViewComplaint = () => { // Destructure id from props
    const [Complaint, setComplaint] = useState([]);
    const { complaintId } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/complaint/id/${complaintId}`);
                setComplaint(response.data);
                console.log(response.data); // Optional: log the response data to console
            } catch (error) {
                console.log(error);
            }
        };
        fetchData(); // Call fetchData function
    }, []); // Add id to dependencies array to fetch data when id changes
    return (
        <section className="book" id="book">
            <div className="row">
                <table>
                    <tbody>
                    <tr>
                        <td><h4>Name:</h4></td>
                        <td>{Complaint.Name}</td>
                    </tr>
                    <tr>
                        <td><h4>Surname:</h4></td>
                        <td>{Complaint.Surname}</td>
                    </tr>
                    <tr>
                        <td><h4>Phone:</h4></td>
                        <td>{Complaint.Phone}</td>
                    </tr>
                    <tr>
                        <td><h4>Email:</h4></td>
                        <td>{Complaint.Email}</td>
                    </tr>
                    <tr><td><h4>CIseries:</h4></td>
                        <td>{Complaint.CIseries}</td></tr>
                    <tr><td><h4>CInr:</h4></td>
                        <td>{Complaint.CInr}</td></tr>
                    <tr><td><h4>CNP:</h4></td>
                        <td>{Complaint.CNP}</td></tr>
                    <tr><td><h4>City:</h4></td>
                        <td>{Complaint.City}</td></tr>
                    <tr><td><h4>County:</h4></td>
                        <td>{Complaint.County}</td></tr>
                    <tr><td><h4>Street:</h4></td>
                        <td>{Complaint.Street}</td></tr>
                    <tr><td><h4>Bl:</h4></td>
                        <td>{Complaint.Bl}</td></tr>
                    <tr><td><h4>Sc:</h4></td>
                        <td>{Complaint.Sc}</td></tr>
                    <tr><td><h4>Ap:</h4></td>
                        <td>{Complaint.Ap}</td></tr>
                    <tr>
                        <td><h4>PoliceName:</h4></td>
                        <td>{Complaint.PoliceName}</td>
                    </tr>
                    <tr>
                        <td><h4>PoliceSurname:</h4></td>
                        <td>{Complaint.PoliceSurname}</td>
                    </tr>
                    <tr>
                        <td><h4>PoliceRole:</h4></td>
                        <td>{Complaint.PoliceRole}</td>
                    </tr>
                    <tr>
                        <td><h4>PoliceInstitution:</h4></td>
                        <td>{Complaint.PoliceInstitution}</td>
                    </tr>
                    <tr>
                        <td><h4>EventPlace:</h4></td>
                        <td>{Complaint.EventPlace}</td>
                    </tr>
                    <tr>
                        <td><h4>VerbalProcess:</h4></td>
                        <td>{Complaint.VerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>SeriesVerbalProcess:</h4></td>
                        <td>{Complaint.SeriesVerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>NumberVerbalProcess:</h4></td>
                        <td>{Complaint.NumberVerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>DateVerbalProcess:</h4></td>
                        <td>{Complaint.DateVerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>HandingOutVerbalProcess:</h4></td>
                        <td>{Complaint.HandingOutVerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>DateOfHandingOutVerbalProcess:</h4></td>
                        <td>{Complaint.DateOfHandingOutVerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>DateOfEvent:</h4></td>
                        <td>{Complaint.DateOfEvent}</td>
                    </tr>
                    <tr>
                        <td><h4>PayTheFine:</h4></td>
                        <td>{Complaint.PayTheFine}</td>
                    </tr>
                    <tr>
                        <td><h4>Options:</h4></td>
                        <td>{Complaint.Options}</td>
                    </tr>
                    <tr>
                        <td><h4>DescriptionOfTheEventInVerbalProcess:</h4></td>
                        <td>{Complaint.DescriptionOfTheEventInVerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>DescriptionOfTheEventInPersonalOpinion:</h4></td>
                        <td>{Complaint.DescriptionOfTheEventInPersonalOpinion}</td>
                    </tr>
                    <tr>
                        <td><h4>LawNumberEvent:</h4></td>
                        <td>{Complaint.LawNumberEvent}</td>
                    </tr>
                    <tr>
                        <td><h4>LawParagraphEvent:</h4></td>
                        <td>{Complaint.LawParagraphEvent}</td>
                    </tr>
                    <tr>
                        <td><h4>LawRuleEvent:</h4></td>
                        <td>{Complaint.LawRuleEvent}</td>
                    </tr>
                    <tr>
                        <td><h4>LawNumberPay:</h4></td>
                        <td>{Complaint.LawNumberPay}</td>
                    </tr>
                    <tr>
                        <td><h4>LawParagraphPay:</h4></td>
                        <td>{Complaint.LawParagraphPay}</td>
                    </tr>
                    <tr>
                        <td><h4>LawRulePay:</h4></td>
                        <td>{Complaint.LawRulePay}</td>
                    </tr>
                    <tr>
                        <td><h4>Witnesses:</h4></td>
                        <td>{Complaint.Witnesses}</td>
                    </tr>
                    <tr>
                        <td><h4>Judge:</h4></td>
                        <td>{Complaint.Judge}</td>
                    </tr>
                    <tr>
                        <td><h4>Lawyer:</h4></td>
                        <td>{Complaint.Lawyer}</td>
                    </tr>
                    <tr>
                        <td><WordDoc nume={Complaint.Name }
                                     prenume={Complaint.Surname }
                                     oras={Complaint.City }
                                     strada={Complaint.Street }
                                     bloc={Complaint.Bl }
                                     scara={Complaint.Sc }
                                     apartament={Complaint.Ap }
                                     judet={Complaint.County }
                                     seriaCI={Complaint.CIseries }
                                     numarCI={Complaint.CInr }
                                     cnp={Complaint.CNP }
                                     serieProces={Complaint.SeriesVerbalProcess }
                                     numarProces={Complaint.NumberVerbalProcess }
                                     dataProces={Complaint.DateVerbalProcess }
                                     dataProcesComunicat={Complaint.DateOfHandingOutVerbalProcess }
                                     primit={Complaint.HandingOutVerbalProcess}
                                     sumaAmenda={Complaint.PayTheFine}
                                     amendaAchitata={Complaint.PayTheFine}
                                     motivProces={Complaint.DescriptionOfTheEventInVerbalProcess }
                                     articolAmenda={Complaint.LawParagraphEvent }
                                     sanctiune={Complaint.LawParagraphEvent }
                                     motivPetent={Complaint.LawParagraphEvent } /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};
export default ViewComplaint;