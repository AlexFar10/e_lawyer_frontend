import './css/style.css'
import Login from "./components/Login";
import Register from "./components/Register";

const Form = () => {


    return (
        <>
            <section className="book" id="book">

                <div className="row">

                    <div className="image">
                        <Login/>
                    </div>

                    <Register/>

                </div>

            </section>
        </>
    )
}

export default Form