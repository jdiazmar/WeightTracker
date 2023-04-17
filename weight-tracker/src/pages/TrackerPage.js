// General Imports
import React from "react";

//Component Imports
import NavBarHeader from "../Components/NavBarHeader/NavBarHeader";
import Footer from "../Components/Footer/Footer";
import AddEntryForm from "../Components/AddEntry/AddEntries";
import DisplayEntries from "../Components/DisplayEntries/DisplayEntries";
import EntriesChartTracker from "../Components/EntriesChartTracker/EntriesChartTracker";

const TrackerPage = () => {
    return ( 
        <div>
            <NavBarHeader />
            <EntriesChartTracker />
            <DisplayEntries />
            <AddEntryForm />
            <Footer />
        </div>
     );
}
 
export default TrackerPage;