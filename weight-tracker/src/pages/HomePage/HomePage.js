// General Imports 
import React from "react";

// Components Imports
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import AddEntryForm from "../../Components/AddEntry/AddEntries";

const HomePage = () => {
    return ( 
        <div>
            <NavBar />
            <AddEntryForm />
            <Footer />
        </div>
     );
}
 
export default HomePage
