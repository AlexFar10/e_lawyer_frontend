import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <>
                <section className="footer">

                    <div className="box-container">



                        <div className="box">
                            <h3>Contact</h3>
                            <a href="#"> <i className="fas fa-phone"></i> +123-456-7890 </a>
                            <a href="#"> <i className="fas fa-phone"></i> +111-222-3333 </a>

                        </div>

                        <div className="box">
                            <h3>Termeni și condiții</h3>
                            <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
                            <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
                            <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
                        </div>

                    </div>



                </section>
            </>
        );
    }
}

export default Footer;