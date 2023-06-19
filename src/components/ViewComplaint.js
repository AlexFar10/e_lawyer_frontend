import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/style.css";
import { useParams} from 'react-router-dom';
import WordDoc from "./WordDoc";
const ViewComplaint = () => { // Destructure id from props
    const [Complaint, setComplaint] = useState([]);
    const { complaintId,complaintPoliceInstitution } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/complaint/id/${complaintId}`);
                setComplaint(response.data); // Optional: log the response data to console
            } catch (error) {
                console.log(error);
            }
        };
        fetchData(); // Call fetchData function
    }, []); // Add id to dependencies array to fetch data when id changes
    const [policeData, setPoliceData] = useState();
    useEffect(() => {
        axios.get(`http://localhost:3000/police/city/${complaintPoliceInstitution}`)
            .then((response) => {
                setPoliceData(`${response.data.Adress} ; ${response.data.Phone}`);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [policeData]);


    return (
        <section className="book" id="book">
            <div className="row">
                <table>
                    <tbody>
                    <tr>
                        <td><h4>Nume:</h4></td>
                        <td>{Complaint.Name}</td>
                    </tr>
                    <tr>
                        <td><h4>Prenume:</h4></td>
                        <td>{Complaint.Surname}</td>
                    </tr>
                    <tr>
                        <td><h4>Telefon:</h4></td>
                        <td>{Complaint.Phone}</td>
                    </tr>
                    <tr>
                        <td><h4>Email:</h4></td>
                        <td>{Complaint.Email}</td>
                    </tr>
                    <tr><td><h4>Serie buletin:</h4></td>
                        <td>{Complaint.CIseries}</td></tr>
                    <tr><td><h4>Numar buletin:</h4></td>
                        <td>{Complaint.CInr}</td></tr>
                    <tr><td><h4>CNP:</h4></td>
                        <td>{Complaint.CNP}</td></tr>
                    <tr><td><h4>Oraș:</h4></td>
                        <td>{Complaint.City}</td></tr>
                    <tr><td><h4>județ:</h4></td>
                        <td>{Complaint.County}</td></tr>
                    <tr><td><h4>Stradă:</h4></td>
                        <td>{Complaint.Street}</td></tr>
                    <tr><td><h4>Bloc:</h4></td>
                        <td>{Complaint.Bl}</td></tr>
                    <tr><td><h4>Scară:</h4></td>
                        <td>{Complaint.Sc}</td></tr>
                    <tr><td><h4>Apartament:</h4></td>
                        <td>{Complaint.Ap}</td></tr>
                    <tr>
                        <td><h4>Nume agent constatator:</h4></td>
                        <td>{Complaint.PoliceName}</td>
                    </tr>
                    <tr>
                        <td><h4>Prenume agent constatator:</h4></td>
                        <td>{Complaint.PoliceSurname}</td>
                    </tr>
                    <tr>
                        <td><h4>Instituția de poliție:</h4></td>
                        <td>{Complaint.PoliceInstitution}</td>
                    </tr>
                    <tr>
                        <td><h4>Adresa instituției:</h4></td>
                        <td>{policeData}</td>
                    </tr>
                    <tr>
                        <td><h4>Locul săvârșirii contravenției:</h4></td>
                        <td>{Complaint.EventPlace}</td>
                    </tr>
                    <tr>
                        <td><h4>Sunteți în posesia procesului verbal?:</h4></td>
                        <td>{Complaint.VerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>Serie proces verbal:</h4></td>
                        <td>{Complaint.SeriesVerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>Număr proces verbal:</h4></td>
                        <td>{Complaint.NumberVerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>Data întocmirii procesului verbal:</h4></td>
                        <td>{Complaint.DateVerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>Cum ați intrat în posesia procesului verbal?:</h4></td>
                        <td>{Complaint.HandingOutVerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>Data înmânării/comunicării procesului verbal:</h4></td>
                        <td>{Complaint.DateOfHandingOutVerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>Data săvârșirii faptei:</h4></td>
                        <td>{Complaint.DateOfEvent}</td>
                    </tr>
                    <tr>
                        <td><h4>Aţi plătit amenda instituită prin procesul verbal?:</h4></td>
                        <td>{Complaint.PayTheFine}</td>
                    </tr>
                    <tr>
                        <td><h4>Care dintre opţiunile de mai jos le solicitaţi instanţei de judecată?:</h4></td>
                        <td>{Complaint.Options}</td>
                    </tr>
                    <tr>
                        <td><h4>Vă rugăm să prezentaţi situaţia descrisă din procesul verbal:</h4></td>
                        <td>{Complaint.DescriptionOfTheEventInVerbalProcess}</td>
                    </tr>
                    <tr>
                        <td><h4>Vă rugăm să prezentaţi situaţia de fapt din punctul dumneavoastră de vedere, mai ales dacă e diferită de de cea prezentată de agentul constatator:</h4></td>
                        <td>{Complaint.DescriptionOfTheEventInPersonalOpinion}</td>
                    </tr>

                    <tr>
                        <td><h4> Vă rugăm să completaţi articolele şi norma legală din procesul verbal cu privire la fapta comisă</h4></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><h4>Articolul:</h4></td>
                        <td>{Complaint.LawNumberEvent}</td>
                    </tr>
                    <tr>
                        <td><h4>Aliniatul:</h4></td>
                        <td>{Complaint.LawParagraphEvent}</td>
                    </tr>
                    <tr>
                        <td><h4>Norma legală în care sunt prevăzute faptele contravenţionale:</h4></td>
                        <td>{Complaint.LawRuleEvent}</td>
                    </tr>
                    <tr>
                        <td><h4>Vă rugăm să completaţi articolele şi norma legală din procesul verbal cu privire la sancţiunea aplicată</h4></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><h4>Articol:</h4></td>
                        <td>{Complaint.LawNumberPay}</td>
                    </tr>
                    <tr>
                        <td><h4>Aliniat:</h4></td>
                        <td>{Complaint.LawParagraphPay}</td>
                    </tr>
                    <tr>
                        <td><h4>Norma legală în care sunt prevăzute sancţiunile :</h4></td>
                        <td>{Complaint.LawRulePay}</td>
                    </tr>
                    <tr>
                        <td><h4>Aveţi martori care să fie audiaţi de instanţa de judecată şi care sunt pregatiţi să vă probeze nevinovaţia?:</h4></td>
                        <td>{Complaint.Witnesses}</td>
                    </tr>
                    <tr>
                        <td><h4>Nume, adresă și număr de telefon martori:</h4></td>
                        <td>{Complaint.WitnessesData}</td>
                    </tr>
                    <tr>
                        <td><h4>Doriţi să vă prezentaţi la sedinţele de judecată sau doriţi judecarea cererii în lipsă?:</h4></td>
                        <td>{Complaint.Judge}</td>
                    </tr>
                    <tr>
                        <td><h4>Doriţi să fiţi asistat de un avocat în sala de judecată?:</h4></td>
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