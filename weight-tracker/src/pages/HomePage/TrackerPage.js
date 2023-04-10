// General Imports
import React from "react";

//Component Imports
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import AddEntryForm from "../../Components/AddEntry/AddEntries";

const TrackerPage = () => {
    return ( 
        <div>
            <NavBar />
            <AddEntryForm />
            <Footer />
        </div>
     );
}
 
export default TrackerPage;