import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./CardHolder.css";
import "./AboutMe.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Fade from 'react-reveal/Fade';

function Contacts(){

    return(
        <Container fluid className="Bg">
        <NavBar />
        <img src="/Portfoliotemp.gif" alt="A rainy afternoon in a rural backyard" className="landingBGAbout" />
        
        <Row className="upperSpacing">
            <Col sm={3}>
                
            </Col>
            <Col sm={9}>
                




             
            </Col>
        </Row>
        <Row>
            <Col sm={3}>
                <Fade bottom>
                    <img src="/paulo.png" alt="A photograph of Paulo Santos" className="portraitImageSizing" />
                </Fade>
            </Col>
            <Col sm={9}>
            <Fade bottom>
                <p className="textColor">Greetings! I'm Paulo Santos.</p>
                <p className="textColor">I'm a full-stack based in Lisbon, Portugal with a background in health sciences looking to innovate trough code and create beautiful apps. </p> 
                <p className="textColor">In this portfolio website you will find projects I've made in the past as well as ideas I'm currently developing. </p>
            </Fade>



             
            </Col>
        </Row>
        <Row>
            <Col sm={3}>

            </Col>
            <Col sm={9}>
            <Fade bottom>
                <p className="textColor"> Skills </p>
            </Fade>
             
            </Col>
        </Row>
        <Row>
            <Col sm={3}>

            </Col>
            <Col sm={9}>
            <Fade bottom>
                <p className="textColor">Hobbies</p>
            </Fade>
             
            </Col>
        </Row>
        <Footer />
    </Container>
    )
}

export default Contacts;