// General Imports 
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components Imports
import NavBarHeader from "../Components/NavBarHeader/NavBarHeader";
import Footer from "../Components/Footer/Footer";
// import WebPage from "../Components/WebPage/WebPage";


const HomePage = () => {
    return ( 
        <div>
            <NavBarHeader />
                <Container >
                    <Row className="justify-content-md-center" >
                        <Col>
                        </Col>
                        <Col>
                            <h1>
                            WELCOME
                            </h1>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                This a tool to help you keep track of your Fitness Goals!
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Footer />

            
        </div>
     );
}
 
export default HomePage
