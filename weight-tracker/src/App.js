// General Imports
import React from "react";
import { Routes, Route} from 'react-router-dom';

//Component Imports
import HomePage from "./pages/HomePage.js";
import TrackerPage from "./pages/TrackerPage.js";

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tracker' element={<TrackerPage />} />
        {/* <Route path='/about' element={<AboutPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
