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

function AboutMe(){

    return(
        <Container fluid className="Bg">
            <NavBar />
            <img src="/Portfoliotemp.gif" alt="A rainy afternoon in a rural backyard" className="landingBGAbout" />
            
            <Row className="upperSpacing">
            </Row>
            <Row>
                <Col sm={2}>
                </Col>
                <Col sm={1}>
                    <Fade bottom>
                        <a href="https://www.linkedin.com/in/paulo-j-santos/" target="_blank"><img src="/paulo.png" alt="A photograph of Paulo Santos" className="portraitImageSizing" /> </a>
                    </Fade>
                </Col>
                <Col sm={9}>
                <Fade bottom>
                    <p className="textColor">Greetings! I'm Paulo Santos.</p>
                    <p className="textColor">I'm a full-stack based in Lisbon, Portugal with a background in health sciences looking to innovate trough code and create beautiful apps. </p> 
                    <p className="textColor">In this portfolio website you will find projects I've made in the past as well as ideas I'm currently developing. </p>
                </Fade>
                <div className="upperSpacing"></div>
                <Fade bottom>
                    <p className="textColor"> Contacts </p>
                </Fade>
                <Fade bottom>
                    <p className="textColor"> paulo.jorge.ngs@gmail.com </p>
                </Fade>
                <div className="flexCenter">
                <Fade bottom>    
                    <a href="https://www.linkedin.com/in/paulo-j-santos/" target="_blank"><p className="textColor"> LinkedIn </p> </a>
                </Fade>
                <Fade bottom>
                    <a href="https://github.com/Jorge-Neves" target="_blank"><p className="textColor"> GitHub </p> </a>
                </Fade>
                <Fade bottom>
                    <a href="https://drive.google.com/file/d/1-UT6f4tUmxLM6iqrZ4qYHlyHbSKOX6Xe/view?usp=sharing" target="_blank"><p className="textColor"> Resume </p> </a>
                </Fade>
                </div>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9}>
                
                </Col>
            </Row>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9}>
               
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default AboutMe;