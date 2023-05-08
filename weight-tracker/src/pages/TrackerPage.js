// General Imports
import React, { useState } from "react";

//Component Imports
import NavBarHeader from "../Components/NavBarHeader/NavBarHeader";
import Footer from "../Components/Footer/Footer";
import AddEntryForm from "../Components/AddEntry/AddEntries";
import DisplayEntries from "../Components/DisplayEntries/DisplayEntries";
import EntriesChartTracker from "../Components/EntriesChartTracker/EntriesChartTracker";

const TrackerPage = () => {

    const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}])

    function addNewEntry(entry){
        let tempEntries = [...entries, entry];
        setEntries(tempEntries);
    }

    return ( 
        <div>
            <NavBarHeader />
            <div>
                <EntriesChartTracker parentEntries={entries} />
                <DisplayEntries parentEntries={entries} />
                <AddEntryForm addNewEntryProperty={addNewEntry} />
            </div>
            <Footer />
        </div>
     );
}
 
export default TrackerPage;