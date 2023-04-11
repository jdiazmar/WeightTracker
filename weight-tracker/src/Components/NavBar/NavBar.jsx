import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import './NavBar.scss';

const NavBar = () => {
    return ( 
        <div>
            <nav class="navbar navbar-dark bg-dark" >
                <NavLink exact='true' activeclassname='active' to='/'  >
                    Home
                </NavLink>
                <NavLink exact='true' activeclassname='active' to='/tracker' >
                    Tracker
                </NavLink>
                <NavLink exact='true' activeclassname='active' to='/about' >
                    About
                </NavLink>
            </nav>
        </div>
     );
}
 
export default NavBar;