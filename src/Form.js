import './css/style.css'
import {Link} from 'react-router-dom';
const Form = ({login}) => {

    return (
        <>
            <section className="book" id="book">
                <div className="row">

<table>
    <tbody>
    <tr>
        <td><Link to="/register" className="btn">
            Register
        </Link></td>
        <td> <Link to="/login" className="btn">
            Login
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
