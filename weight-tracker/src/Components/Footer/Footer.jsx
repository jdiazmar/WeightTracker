import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './Footer.scss';

const Footer = () => {
    return ( 
        <footer  >
            <Container fluid="md" className="justify-content-center">
                <Row>
                    <Col>WeightTracker JDM 2023</Col>
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;