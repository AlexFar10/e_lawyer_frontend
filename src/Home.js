import React, {Component} from 'react';
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Form from "./Form";

class Home extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <Header/>
                <AboutUs/>
                <Form/>
                <Footer/>

            </>
        );
    }
}

export default Home;