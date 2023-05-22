import React, {useEffect, useState} from "react";
import axios from "axios";
import "../css/style.css";

const ViewComplaint = (id) => {
    const [Complaint, setComplaint] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/complaint/id/${id}`)
            .then((response) => {
                setComplaint(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="book" id="book">
            <div className="row">
                <table>
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
                    <tr>
                        <td><h4>Address:</h4></td>
                        <td>{Complaint.Address}</td>
                    </tr>
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
                </table>

            </div>
        </section>
    );
};

export default ViewComplaint;