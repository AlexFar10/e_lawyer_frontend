import React, { useEffect, useRef, useState } from 'react';
import axios from '../api/axios';
import '../css/style.css';
import { useParams} from 'react-router-dom';
const EditComplaint = () => {
    const [complaint, setComplaint] = useState({});
    const { complaintId } = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:3000/complaint/id/${complaintId}`)
            .then((response) => {
                setComplaint(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');

    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [PoliceName, setPoliceName] = useState('');
    const [PoliceSurname, setPoliceSurname] = useState('');
    const [PoliceInstitution, setPoliceInstitution] = useState('');
    const [EventPlace, setEventPlace] = useState('');
    const [VerbalProcess, setVerbalProcess] = useState('');
    const [SeriesVerbalProcess, setSeriesVerbalProcess] = useState('');
    const [NumberVerbalProcess, setNumberVerbalProcess] = useState('');
    const [DateVerbalProcess, setDateVerbalProcess] = useState('');
    const [HandingOutVerbalProcess, setHandingOutVerbalProcess] = useState('');
    const [DateOfHandingOutVerbalProcess, setDateOfHandingOutVerbalProcess] = useState('');
    const [DateOfEvent, setDateOfEvent] = useState('');
    const [PayTheFine, setPayTheFine] = useState('');
    const [Options, setOptions] = useState('');
    const [DescriptionOfTheEventInVerbalProcess, setDescriptionOfTheEventInVerbalProcess] = useState('');
    const [DescriptionOfTheEventInPersonalOpinion, setDescriptionOfTheEventInPersonalOpinion] = useState('');
    const [LawNumberEvent, setLawNumberEvent] = useState('');
    const [LawParagraphEvent, setLawParagraphEvent] = useState('');
    const [LawRuleEvent, setLawRuleEvent] = useState('');
    const [LawNumberPay, setLawNumberPay] = useState('');
    const [LawParagraphPay, setLawParagraphPay] = useState('');
    const [LawRulePay, setLawRulePay] = useState('');
    const [Witnesses, setWitnesses] = useState('');
    const [Judge, setJudge] = useState('');
    const [Lawyer, setLawyer] = useState('');
    const [Title, setTitle] = useState('');
    const [Observations, setObservations] = useState('');

    const [CIseries, setCIseries] = useState('');
    const [CInr, setCInr] = useState('');
    const [CNP, setCNP] = useState('');
    const [City, setCity] = useState('');
    const [County, setCounty] = useState('');
    const [Street, setStreet] = useState('');
    const [Bl, setBl] = useState('');
    const [Sc, setSc] = useState('');
    const [Ap, setAp] = useState('');
    const [Accept, setAccept] = useState('');
    const [WitnessesData, setWitnessesData] = useState('');
    const [PoliceAdr, setPoliceAdr] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/complaint/${complaintId}`, {
                Name: Name,
                Surname: Surname,
                Phone: Phone,
                Email: Email,
                PoliceName: PoliceName,
                PoliceSurname: PoliceSurname,
                PoliceInstitution: PoliceInstitution,
                EventPlace: EventPlace,
                VerbalProcess: VerbalProcess,
                SeriesVerbalProcess: SeriesVerbalProcess,
                NumberVerbalProcess: NumberVerbalProcess,
                DateVerbalProcess: DateVerbalProcess,
                HandingOutVerbalProcess: HandingOutVerbalProcess,
                DateOfHandingOutVerbalProcess: DateOfHandingOutVerbalProcess,
                DateOfEvent: DateOfEvent,
                PayTheFine: PayTheFine,
                Options: Options,
                DescriptionOfTheEventInVerbalProcess: DescriptionOfTheEventInVerbalProcess,
                DescriptionOfTheEventInPersonalOpinion: DescriptionOfTheEventInPersonalOpinion,
                LawNumberEvent: LawNumberEvent,
                LawParagraphEvent: LawParagraphEvent,
                LawRuleEvent: LawRuleEvent,
                LawNumberPay: LawNumberPay,
                LawParagraphPay: LawParagraphPay,
                LawRulePay: LawRulePay,
                Witnesses: Witnesses,
                Judge: Judge,
                Lawyer: Lawyer,
                UserID: complaint.UserID,
                Title: Title,
                Observations: Observations,

                CIseries : CIseries,
                CInr : CInr,
                CNP : CNP,
                City : City,
                County : County,
                Street : Street,
                Bl : Bl,
                Sc : Sc,
                Ap : Ap,
                Accept : Accept,
                WitnessesData : WitnessesData,
                PoliceAdr : PoliceAdr,
            });

            setName('');
            setSurname('');
            setPhone('');
            setEmail('');
            setPoliceName('');
            setPoliceSurname('');
            setPoliceInstitution('');
            setEventPlace('');
            setVerbalProcess('');
            setSeriesVerbalProcess('');
            setNumberVerbalProcess('');
            setDateVerbalProcess('');
            setHandingOutVerbalProcess('');
            setDateOfHandingOutVerbalProcess('');
            setDateOfEvent('');
            setPayTheFine('');
            setOptions('');
            setDescriptionOfTheEventInVerbalProcess('');
            setDescriptionOfTheEventInPersonalOpinion('');
            setLawNumberEvent('');
            setLawParagraphEvent('');
            setLawRuleEvent('');
            setLawNumberPay('');
            setLawParagraphPay('');
            setLawRulePay('');
            setWitnesses('');
            setJudge('');
            setLawyer('');
            setTitle('');
            setObservations('');

            setCIseries('');
            setCInr('');
            setCNP('');
            setCity('');
            setCounty('');
            setStreet('');
            setBl('');
            setSc('');
            setAp('');
            setAccept('');
            setWitnessesData('');
            setPoliceAdr('');


        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
                console.log(err);
            } else {
                setErrMsg('Failed');
                console.log(err);
            }
        }
    };

    return (
        <section>
            <section className="book" id="book">
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="Name" className="content">Nume:</label>
                        <input
                            type="text"
                            id="Name"
                            name="Name"
                            className="box"
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                            value={Name}
                            placeholder={complaint.Name}
                            required
                        />
                        <label htmlFor="Surname" className="content">Prenume:</label>
                        <input
                            type="text"
                            id="Surname"
                            name="Surname"
                            className="box"
                            autoComplete="off"
                            onChange={(e) => setSurname(e.target.value)}
                            value={Surname}
                            placeholder={complaint.Surname}
                            required
                        />
                        <label htmlFor="Phone" className="content">Telefon:</label>
                        <input
                            type="text"
                            id="Phone"
                            name="Phone"
                            className="box"
                            autoComplete="off"
                            onChange={(e) => setPhone(e.target.value)}
                            value={Phone}
                            placeholder={complaint.Phone}
                            required
                        />
                        <label htmlFor="Email" className="content">Email:</label>
                        <input
                            type="text"
                            id="Email"
                            name="Email"
                            className="box"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={Email}
                            placeholder={complaint.Email}
                            required
                        />
                        <label htmlFor="CIseries" className="content">Serie buletin:</label>
                        <input
                            type="text"
                            id="CIseries"
                            name="CIseries"
                            className="box"
                            autoComplete="off"
                            onChange={(e) => setCIseries(e.target.value)}
                            value={CIseries}
                            placeholder={complaint.CIseries}
                            required
                        />
                        <label htmlFor="CInr" className="content">Număr buletin:</label>
                        <input
                            type="text"
                            id="CInr"
                            name="CInr"
                            className="box"
                            autoComplete="off"
                            onChange={(e) => setCInr(e.target.value)}
                            value={CInr}
                            placeholder={complaint.CInr}
                            required
                        />
                        <label htmlFor="CNP" className="content">CNP:</label>
                        <input
                            type="text"
                            id="CNP"
                            name="CNP"
                            className="box"
                            autoComplete="off"
                            onChange={(e) => setCNP(e.target.value)}
                            value={CNP}
                            placeholder={complaint.CNP}
                            required
                        />

                        <label htmlFor="City" className="content">Oraș:</label>
                        <input
                            type="text"
                            id="City"
                            name="City"
                            className="box"
                            autoComplete="off"
                            onChange={(e) => setCity(e.target.value)}
                            value={City}
                            placeholder={complaint.City}
                            required
                        />
                        <label htmlFor="County" className="content">Județ:</label>
                        <input
                            type="text"
                            id="County"
                            name="County"
                            className="box"
                            onChange={(e) => setCounty(e.target.value)}
                            value={County}
                            placeholder={complaint.County}
                            required
                        />

                        <label htmlFor="Street" className="content">Stradă:</label>
                        <input
                            type="text"
                            id="Street"
                            name="Street"
                            className="box"
                            onChange={(e) => setStreet(e.target.value)}
                            value={Street}
                            placeholder={complaint.Street}
                            required
                        />
                        <label htmlFor="Bl" className="content">Bloc:</label>
                        <input
                            type="text"
                            id="Bl"
                            name="Bl"
                            className="box"
                            onChange={(e) => setBl(e.target.value)}
                            value={Bl}
                            placeholder={complaint.Bl}
                            required
                        />
                        <label htmlFor="Sc" className="content">Scară:</label>
                        <input
                            type="text"
                            id="Sc"
                            name="Sc"
                            className="box"
                            onChange={(e) => setSc(e.target.value)}
                            value={Sc}
                            placeholder={complaint.Sc}
                            required
                        />
                        <label htmlFor="Ap" className="content">Apartament:</label>
                        <input
                            type="text"
                            id="Ap"
                            name="Ap"
                            className="box"
                            onChange={(e) => setAp(e.target.value)}
                            value={Ap}
                            placeholder={complaint.Ap}
                            required
                        />
                        <label htmlFor="PoliceName" className="content">Numele agentului constatator:</label>
                        <input
                            type="text"
                            id="PoliceName"
                            name="PoliceName"
                            className="box"
                            autoComplete="off"
                            onChange={(e) => setPoliceName(e.target.value)}
                            value={PoliceName}
                            placeholder={complaint.PoliceName}
                            required
                        />
                        <label htmlFor="PoliceSurname" className="content">Prenumele agentului constatator:</label>
                        <input
                            type="text"
                            id="PoliceSurname"
                            name="PoliceSurname"
                            className="box"
                            onChange={(e) => setPoliceSurname(e.target.value)}
                            value={PoliceSurname}
                            placeholder={complaint.PoliceSurname}
                            required
                        />

                        <label htmlFor="PoliceInstitution" className="content">Instituția de poliție (orașul, comuna unde se află):</label>
                        <input
                            type="text"
                            id="PoliceInstitution"
                            name="PoliceInstitution"
                            className="box"
                            onChange={(e) => setPoliceInstitution(e.target.value)}
                            value={PoliceInstitution}
                            placeholder={complaint.PoliceInstitution}
                            required
                        />

                        <label htmlFor="EventPlace" className="content">Locul săvârșirii contravenției:</label>
                        <input
                            type="text"
                            id="EventPlace"
                            name="EventPlace"
                            className="box"
                            onChange={(e) => setEventPlace(e.target.value)}
                            value={EventPlace}
                            placeholder={complaint.EventPlace}
                            required
                        />
                        <label htmlFor="VerbalProcess" className="content">Sunteți în posesia procesului verbal?:</label>
                        <select
                            id="VerbalProcess"
                            name="VerbalProcess"
                            className="box"
                            onChange={(e) => setVerbalProcess(e.target.value)}
                            value={VerbalProcess}
                            placeholder={complaint.VerbalProcess}
                            required
                        >
                            <option value="">Selectare</option>
                            <option value="DA">DA</option>
                            <option value="NU">NU</option>
                        </select>
                        <label htmlFor="SeriesVerbalProcess" className="content">Serie proces verbal:</label>
                        <input
                            type="text"
                            id="SeriesVerbalProcess"
                            name="SeriesVerbalProcess"
                            className="box"
                            onChange={(e) => setSeriesVerbalProcess(e.target.value)}
                            value={SeriesVerbalProcess}
                            placeholder={complaint.SeriesVerbalProcess}
                            required
                        />
                        <label htmlFor="NumberVerbalProcess" className="content">Număr proces verbal:</label>
                        <input
                            type="text"
                            id="NumberVerbalProcess"
                            name="NumberVerbalProcess"
                            className="box"
                            onChange={(e) => setNumberVerbalProcess(e.target.value)}
                            value={NumberVerbalProcess}
                            placeholder={complaint.NumberVerbalProcess}
                            required
                        />
                        <label htmlFor="DateVerbalProcess" className="content">Data întocmirii procesului verbal:</label>
                        <input
                            type="text"
                            id="DateVerbalProcess"
                            name="DateVerbalProcess"
                            className="box"
                            onChange={(e) => setDateVerbalProcess(e.target.value)}
                            value={DateVerbalProcess}
                            placeholder={complaint.DateVerbalProcess}
                            required
                        />
                        <label htmlFor="HandingOutVerbalProcess" className="content">Cum ați intrat în posesia procesului verbal?:</label>
                        <select
                            id="HandingOutVerbalProcess"
                            name="HandingOutVerbalProcess"
                            className="box"
                            onChange={(e) => setHandingOutVerbalProcess(e.target.value)}
                            value={HandingOutVerbalProcess}
                            placeholder={complaint.HandingOutVerbalProcess}
                            required
                        >
                            <option value="">Select an option</option>
                            <option value="PRIN INMANARE LA FATA LOCULUI">PRIN INMABARE LA FATA LOCULUI</option>
                            <option value="PRIN POSTA">PRIN POSTA</option>
                        </select>
                        <label htmlFor="DateOfHandingOutVerbalProcess"
                               className="content">Data înmânării/comunicării procesului verbal:</label>
                        <input
                            type="text"
                            id="DateOfHandingOutVerbalProcess"
                            name="DateOfHandingOutVerbalProcess"
                            className="box"
                            onChange={(e) => setDateOfHandingOutVerbalProcess(e.target.value)}
                            value={DateOfHandingOutVerbalProcess}
                            placeholder={complaint.DateOfHandingOutVerbalProcess}
                            required
                        />
                        <label htmlFor="DateOfEvent" className="content">Data săvârșirii faptei:</label>
                        <input
                            type="text"
                            id="DateOfEvent"
                            name="DateOfEvent"
                            className="box"
                            onChange={(e) => setDateOfEvent(e.target.value)}
                            value={DateOfEvent}
                            placeholder={complaint.DateOfEvent}
                            required
                        />
                        <label htmlFor="PayTheFine" className="content">Aţi plătit amenda instituită prin procesul verbal?:</label>
                        <select
                            id="PayTheFine"
                            name="PayTheFine"
                            className="box"
                            onChange={(e) => setPayTheFine(e.target.value)}
                            value={PayTheFine}
                            placeholder={complaint.PayTheFine}
                            required
                        >
                            <option value="">Selectare</option>
                            <option value="DA">DA</option>
                            <option value="NU">NU</option>
                        </select>

                        <label htmlFor="Options" className="content">Care dintre opţiunile de mai jos le solicitaţi instanţei de judecată?:</label>
                        <select
                            id="Options"
                            name="Options"
                            className="box"
                            onChange={(e) => setOptions(e.target.value)}
                            value={Options}
                            placeholder={complaint.Options}
                            required
                        >
                            <option value="">Selectare</option>
                            <option
                                value="Doresc anularea amenzi pentru că sunt nevinovat iar amenda este abuzivă. Am documente şi martori care să ateste nevinovaţia mea">Doresc
                            </option>
                            <option
                                value="Doresc preschimbarea amenzii în avertisment pentru că deşi sunt vinovat, sunt la prima abatere contravenţională.">Doresc
                                preschimbarea amenzii în avertisment pentru că deşi sunt vinovat, sunt la prima abatere
                                contravenţională.
                            </option>
                            <option
                                value="Doresc reducerea cuantumului amenzii pentru că amenda primită reprezintă maximul din cât mi se putea aplica sau este disproporţionată în raport de veniturile mele">Doresc
                                reducerea cuantumului amenzii pentru că amenda primită reprezintă maximul din cât mi se
                                putea aplica sau este disproporţionată în raport de veniturile mele
                            </option>
                        </select>
                        <label htmlFor="DescriptionOfTheEventInVerbalProcess"
                               className="content">Vă rugăm să prezentaţi situaţia descrisă din procesul verbal:</label>
                        <input
                            type="text"
                            id="DescriptionOfTheEventInVerbalProcess"
                            name="DescriptionOfTheEventInVerbalProcess"
                            className="box"
                            onChange={(e) => setDescriptionOfTheEventInVerbalProcess(e.target.value)}
                            value={DescriptionOfTheEventInVerbalProcess}
                            placeholder={complaint.DescriptionOfTheEventInVerbalProcess}
                            required
                        />
                        <label htmlFor="DescriptionOfTheEventInPersonalOpinion"
                               className="content">Vă rugăm să prezentaţi situaţia de fapt din punctul dumneavoastră de vedere, mai ales dacă e diferită de de cea prezentată de agentul constatator:</label>
                        <input
                            type="text"
                            id="DescriptionOfTheEventInPersonalOpinion"
                            name="DescriptionOfTheEventInPersonalOpinion"
                            className="box"
                            onChange={(e) => setDescriptionOfTheEventInPersonalOpinion(e.target.value)}
                            value={DescriptionOfTheEventInPersonalOpinion}
                            placeholder={complaint.DescriptionOfTheEventInPersonalOpinion}
                            required
                        />
                        <label  className="content"> Vă rugăm să completaţi articolele şi norma legală din procesul verbal cu privire la fapta comisă</label><br/>
                        <label htmlFor="LawNumberEvent" className="content">Articolul:</label>
                        <input
                            type="text"
                            id="LawNumberEvent"
                            name="LawNumberEvent"
                            className="box"
                            onChange={(e) => setLawNumberEvent(e.target.value)}
                            value={LawNumberEvent}
                            placeholder={complaint.LawNumberEvent}
                            required
                        />
                        <label htmlFor="LawParagraphEvent" className="content">Aliniatul:</label>
                        <input
                            type="text"
                            id="LawParagraphEvent"
                            name="LawParagraphEvent"
                            className="box"
                            onChange={(e) => setLawParagraphEvent(e.target.value)}
                            value={LawParagraphEvent}
                            placeholder={complaint.LawParagraphEvent}
                            required
                        />
                        <label htmlFor="LawRuleEvent" className="content">norma legală în care sunt prevăzute faptele contravenţionale:</label>
                        <input
                            type="text"
                            id="LawRuleEvent"
                            name="LawRuleEvent"
                            className="box"
                            onChange={(e) => setLawRuleEvent(e.target.value)}
                            value={LawRuleEvent}
                            placeholder={complaint.LawRuleEvent}
                            required
                        />
                        <label  className="content">Vă rugăm să completaţi articolele şi norma legală din procesul verbal cu privire la sancţiunea aplicată</label><br/>
                        <label htmlFor="LawNumberPay" className="content">Articol:</label>
                        <input
                            type="text"
                            id="LawNumberPay"
                            name="LawNumberPay"
                            className="box"
                            onChange={(e) => setLawNumberPay(e.target.value)}
                            value={LawNumberPay}
                            placeholder={complaint.LawNumberPay}
                            required
                        />
                        <label htmlFor="LawParagraphPay" className="content">Aliniat:</label>
                        <input
                            type="text"
                            id="LawParagraphPay"
                            name="LawParagraphPay"
                            className="box"
                            onChange={(e) => setLawParagraphPay(e.target.value)}
                            value={LawParagraphPay}
                            placeholder={complaint.LawParagraphPay}
                            required
                        />
                        <label htmlFor="LawRulePay" className="content">norma legală în care sunt prevăzute sancţiunile :</label>
                        <input
                            type="text"
                            id="LawRulePay"
                            name="LawRulePay"
                            className="box"
                            onChange={(e) => setLawRulePay(e.target.value)}
                            value={LawRulePay}
                            placeholder={complaint.LawRulePay}
                            required
                        />
                        <label htmlFor="Witnesses" className="content">Aveţi martori care să fie audiaţi de instanţa de judecată şi care sunt pregatiţi să vă probeze nevinovaţia?:</label>
                        <select
                            id="Witnesses"
                            name="Witnesses"
                            className="box"
                            onChange={(e) => setWitnesses(e.target.value)}
                            value={Witnesses}
                            placeholder={complaint.Witnesses}
                            required
                        >
                            <option value="">Selectare</option>
                            <option value="DA">DA</option>
                            <option value="NU">NU</option>
                        </select>

                        <label htmlFor="WitnessesData" className="content">Nume, adresă și număr de telefon martori:</label>
                        <textarea
                            rows="4"
                            type="text"
                            id="WitnessesData"
                            name="WitnessesData"
                            className="box"
                            autoComplete="off"
                            onChange={(e) => setWitnessesData(e.target.value)}
                            value={WitnessesData}
                            placeholder={complaint.WitnessesData}
                            required
                        />
                        <label htmlFor="Judge" className="content">Doriţi să vă prezentaţi la sedinţele de judecată sau doriţi judecarea cererii în lipsă?:</label>
                        <select
                            id="Judge"
                            name="Judge"
                            className="box"
                            onChange={(e) => setJudge(e.target.value)}
                            value={Judge}
                            placeholder={complaint.Judge}
                            required
                        >
                            <option value="">Selectare</option>
                            <option value="Doresc să particip la şedinţele de judecată">Doresc să particip la şedinţele de
                                judecată
                            </option>
                            <option value="Doresc judecarea cererii de chemare în judecată în lipsa mea">Doresc judecarea
                                cererii de chemare în judecată în lipsa mea
                            </option>
                        </select>

                        <label htmlFor="Lawyer" className="content">Doriţi să fiţi asistat de un avocat în sala de judecată?:</label>
                        <select
                            id="Lawyer"
                            name="Lawyer"
                            className="box"
                            onChange={(e) => setLawyer(e.target.value)}
                            value={Lawyer}
                            placeholder={complaint.Lawyer}
                            required
                        >
                            <option value="">Selectare</option>
                            <option value="DA">DA</option>
                            <option value="NU">NU</option>
                        </select>
                        <label htmlFor="LawRulePay" className="content">Titlu formular (pentru al găsii mai ușor în listă):</label>
                        <input
                            type="text"
                            id="LawRulePay"
                            name="LawRulePay"
                            className="box"
                            onChange={(e) => setTitle(e.target.value)}
                            value={Title}
                            placeholder={complaint.Title}
                            required
                        />
                <label htmlFor="LawRulePay" className="content">Observații privind plăngerea:</label>
                <input
                    type="text"
                    id="LawRulePay"
                    name="LawRulePay"
                    className="box"
                    onChange={(e) => setTitle(e.target.value)}
                    value={Observations}
                    placeholder={complaint.Observations}
                    required
                />
                        <label htmlFor="Accept" className="content">Menţionez că am citit şi sunt de acord cu termenii şi condiţiile prezentei aplicaţii:</label>
                        <input
                            type="text"
                            id="Accept"
                            name="Accept"
                            className="box"
                            autoComplete="off"
                            onChange={(e) => setAccept(e.target.value)}
                            value={Accept}
                            required
                        />
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                    {errMsg}
                </p>
                <button className="btn">Trimite</button>
            </form>
                </div>
            </section>
        </section>
    );
};

export default EditComplaint;
