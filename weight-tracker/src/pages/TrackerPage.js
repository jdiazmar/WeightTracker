// General Imports
import React from "react";

//Component Imports
import NavBarHeader from "../Components/NavBarHeader/NavBarHeader";
import Footer from "../Components/Footer/Footer";
import AddEntryForm from "../Components/AddEntry/AddEntries";
import DisplayEntries from "../Components/DisplayEntries/DisplayEntries";

const TrackerPage = () => {
    return ( 
        <div>
            <NavBarHeader />
            <DisplayEntries />
            <AddEntryForm />
            <Footer />
        </div>
     );
}
 
export default TrackerPage;