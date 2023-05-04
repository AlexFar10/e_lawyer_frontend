import React, {Component} from 'react';
import '../css/style.css'
import lawyer from '../img/about.png'

class AboutUs extends Component {
    render() {
        return (
            <>
                <section className="home" id="home">
                    <div className="image">
                        <img src={lawyer} alt=""/>
                    </div>
                    <div className="content">
                        <h3 className="heading">Despre noi </h3>
                        <p>Ai primit o amendă în trafic și consideri că ești neîndreptățit?
                        <br/>Dacă da, ești pe pagina potrivită.
                        <br/><br/>Doar intră în cont, completează formularul, iar de restul ne ocupăm noi!</p>
                    </div>
                </section>
            </>

        );
    }
}

export default AboutUs;