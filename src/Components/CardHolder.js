import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./CardHolder.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Fade from 'react-reveal/Fade';

function CardHolder(){

    return(
        <Container fluid className="Bg">
            <NavBar />
            <img src="/Portfoliotemp.gif" alt="A rainy afternoon in a rural backyard" className="landingBGAbout" />
            <Row className="upperSpacing">
            </Row>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={6}>
                    <div className="FlexRow">
                    <Fade bottom>
                            <div>
                                <a href="https://github.com/Jorge-Neves/I-O-for-Kailo---Hackathon-2021-entry" target="_blank"><img src="/DocumentationScreenshot2.png" alt="A photograph of Paulo Santos" className="projectImageSizing" /> </a>
                                <div>
                                    <p className="textColor">I/O for Kailo (Hackathon #CompormetidosPorElFuturo 2021)</p>
                                    <div className="ProjectsFlexSpacing">
                                        <a href="https://github.com/Jorge-Neves/I-O-for-Kailo---Hackathon-2021-entry" target="_blank"><p className="textColor">Github</p></a>
                                        <a href="https://www.linkedin.com/in/paulo-j-santos/" target="_blank"><p p className="textColor">Demo</p></a>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div>
                                <a href="https://github.com/Jorge-Neves/High-Noon" target="_blank"><img src="/Documentation.png" alt="A photograph of Paulo Santos" className="projectImageSizing" /> </a>
                                <div>
                                    <p className="textColor">High Noon</p>
                                    <div className="ProjectsFlexSpacing">
                                        <a href="https://github.com/Jorge-Neves/High-Noon" target="_blank"><p className="textColor">Github</p></a>
                                        <a href="https://io-for-kailo-hackathon-2021-frontend.netlify.app/" target="_blank"><p p className="textColor">Demo</p></a>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                 
                </Col>
                <Col sm={3}>

                </Col>
            </Row>
            <Row>
            <Col sm={3}>

</Col>
<Col sm={6}>
    <div className="FlexRow">
    <Fade bottom>
            <div>
                <a href="https://github.com/Jorge-Neves/Quidditch-Manager-Project" target="_blank"><img src="/DocumentationScreenshot.png" alt="A photograph of Paulo Santos" className="projectImageSizing" /> </a>
                <div>
                    <p className="textColor">Quidditch Manager</p>
                    <div className="ProjectsFlexSpacing">
                        <a href="https://github.com/Jorge-Neves/Quidditch-Manager-Project" target="_blank"><p className="textColor">Github</p></a>
                        <a href="https://quidditch-manager-project.herokuapp.com/" target="_blank"><p p className="textColor">Demo</p></a>
                    </div>
                </div>
            </div>
        </Fade>
        <Fade bottom>
            <div>
                <a href="https://github.com/Jorge-Neves/Save-The-Theater-Project" target="_blank"><img src="/DocumentationScreen.png" alt="A photograph of Paulo Santos" className="projectImageSizing" /> </a>
                <div>
                    <p className="textColor">Save The Theater</p>
                    <div className="ProjectsFlexSpacing">
                        <a href="https://github.com/Jorge-Neves/Save-The-Theater-Project" target="_blank"><p className="textColor">Github</p></a>
                        <a href="https://save-the-theater.netlify.app/" target="_blank"><p p className="textColor">Demo</p></a>
                    </div>
                </div>
            </div>
        </Fade>
    </div>
 
</Col>
<Col sm={3}>

</Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default CardHolder;