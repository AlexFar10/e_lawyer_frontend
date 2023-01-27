import React, {Component} from 'react';
import '../css/style.css'
import gavel from '../img/gavel.jpg'

class Header extends Component {
    render() {
        return (
            <>
                <section className="home" id="home">

                    <div className="image">
                        <img src={gavel} alt=""/>
                    </div>

                    <div className="content">
                        <h2 className="heading"><span>Verdict:</span><br/>  amendă abuzivă </h2>
                        <p>Ai primit o amendă în trafic și consideri că ești neîndreptățit?
                        <br/>Dacă da, ești pe pagina potrivită.
                        <br/><br/>Doar intră în cont, completează formularul, iar de restul ne ocupăm noi!</p>

                        <div className="button">
                            <a href="#" className="btn"> CONECTEAZĂ - TE !  </a>
                        </div>
                    </div>

                </section>

            </>

        );
    }
}

export default Header;