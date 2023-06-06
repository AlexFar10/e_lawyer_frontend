import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import '../css/style.css';
import {useEffect, useState} from 'react'
pdfMake.vfs = pdfFonts.pdfMake.vfs

const WordDoc = ({nume,
                     prenume,
                     oras,
                     strada,
                     bloc,
                     scara,
                     apartament,
                     judet,
                     seriaCI,
                     numarCI,
                     cnp,
                     serieProces,
                     numarProces,
                     dataProces,
                     dataProcesComunicat,
                     primit,
                     sumaAmenda,
                     amendaAchitata,
                     motivProces,
                     articolAmenda,
                     sanctiune,
                     motivPetent,}) => {

    const docDefinition = {
        content: [
            '  ',
            'CĂTRE\n' +
            'JUDECĂTORIA Timişoara}',
            '  ',
            `Subsemnaul ${nume} ${prenume}, cu domiciliul în ${oras}, strada ${strada}, bl. ${bloc}, sc. ${scara}, ap. ${apartament} , jud. ${judet}, posesor al CI seria ${seriaCI} nr. ${numarCI}, CNP: ${cnp}, in calitate de Petent`,
            '  ',
            'În contradictoriu cu Inspectoratul de Jandarmi Judetean Timis, UM 0805 Timişoara, cu sediul în Timişoara, Str. Gheorghe Baritiu nr. 19 - 21, Timisoara, cod 300167, telefon:  0256/490990, 0743559824, fax: 0256/293627, email: relatii_publice@jandarmeriatimis.ro, Jud. TIMIŞ, prin reprezentant legal, în calitate de Intimat, ',
            '  ',
            'în temeiul art.  31 din Ordonanţa nr. 2/2001 privind regimul juridic al contraventiilor precum şi art. 118 din OUG 195/2002, formulez în termenul legal şi depun prezenta',
            '  ',
            'PLÂNGERE CONTRAVENŢIONALĂ',
            '  ',
            `împotriva procesului verbal de contravenţie seria ${serieProces} nr. ${numarProces} din ${dataProces} şi comunicat în ${dataProcesComunicat}, prin inmanare ${primit} solicitându-vă, ca prin sentinţa ce o veţi pronunţa, să dispuneţi:`,
            '  ',
            `să dispuneţi admiterea acţiunii, anularea procesului verbal de contravenţie având în vedere modul în care este completat, dar şi pentru că fapta nu există şi, în consecinţă, anularea sancţiunii constând în aplicarea amenzii de ${sumaAmenda} RON, care ${amendaAchitata} precum şi anularea sancţiunii constând în suspendarea dreptului de a conduce, `,
            '  ',
            'obligarea intimatei la suportarea tuturor cheltuielilor de judecată angajate de subsemnatul în cadrul prezentului litigiu, constând în taxă judiciară de timbru şi onorariu de avocat,',
            '  ',
            'Pentru următoarele\n' +
            'MOTIVE',
            '  ',
            `ÎN FAPT, ${motivProces}, motiv pentru care a fost întocmit procesul verbal de contravenţie seria ${serieProces} nr. ${numarProces} cu aplicarea sancţiunii constând ${sanctiune}. Arăt că am fost cu semnarea acestuia deoarece fapta descrisă în procesul verbal nu corespunde realităţii. \n` +
            `Agentul constatator a dispus aplicarea unei amenzi contravenţionale în cuantum de ${sumaAmenda} RON, în temeiul art. ${articolAmenda} din Ordonanţa de urgenţă a Guvernului nr. 195/2002 privind circulaţia pe drumurile publice\n`,
            '  ',
            `In realitate, subsemnatul ${motivPetent}`,
            '  ',
            'MOTIVARE ÎN DREPT: ',
            '  ',
            `Articolul indicat cu referire la sancţiunea aplicată este cel prevăzut la art. ${articolAmenda}:”`,
            '  ',
            'În probarea celor susținute, solicit încuviințarea administrării probei cu înscrisuri şi cu martorii ${martori)\n' +
            'Teza probatie: \n' +
            'În temeiul dispozițiilor art. 223 alin. (3) Cod Procedură Civilă solicit judecarea prezentei cauze și în lipsa părților.\n',
            '  ',
            'Depun prezenta plângere contravențională, în 2 (două) exemplare, însoțită de următoarele înscrisuri:\n' +
            '- …;\n' +
            '- Fotocopie conformă cu originalul a C.I./B.I. a subsemnatului;\n' +
            '- Dovada achitării taxei judiciare de timbru în cuantum de 20 de Lei.\n' +
            '\n' +
            '\n' +
            'Pentru toate cele prezentate în prezenta Plângere, solicităm admiterea acţiunii şi să dispuneţi anularea procesului verbal de contravenţie. \n' +
            '\n' +
            '\n' +
            'Cu stimă,\n' +
            '\n' +
            'prin Avocat MARCU Mihaela Luminiţa\n',
        ],

        styles: {

        },
    };
    const [url, setUrl] = useState(null)

    const createPdf = () => {
        const pdfGenerator = pdfMake.createPdf(docDefinition);
        pdfGenerator.getBlob((blob) => {
            const url = URL.createObjectURL(blob);
            setUrl(url)
        })
        pdfGenerator.download()
    }

    return (
        <div className="App">
            <button className="btn" onClick={createPdf}>Generate PDF</button>
            {url && (
                <div>
                    {url}
                </div>
            )}
        </div>
    );
}

export default WordDoc;
