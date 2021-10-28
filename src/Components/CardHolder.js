import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./CardHolder.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function CardHolder(){

    return(
        <Container fluid className="Bg">
            <NavBar />
            <img src="/Portfoliotemp.gif" alt="A rainy afternoon in a rural backyard" className="landingBG" />
            <Footer />
        </Container>
    )
}

export default CardHolder;