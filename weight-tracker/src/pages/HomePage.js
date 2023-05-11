// General Imports 
import React from "react";
import Container from 'react-bootstrap/Container';

// Components Imports
import NavBarHeader from "../Components/NavBarHeader/NavBarHeader";
import Footer from "../Components/Footer/Footer";
// import WebPage from "../Components/WebPage/WebPage";


const HomePage = () => {
    return ( 
        <div>
            <NavBarHeader />
                <Container fluid>
                    <h1>
                        WELCOME
                    </h1>
                    <p>
                        This a tool to help you keep track of your Fitness Goals!
                    </p>
                    {/* <WebPage  /> */}
                </Container>

            <Footer />
        </div>
     );
}
 
export default HomePage
