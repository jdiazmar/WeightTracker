import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
    return ( 
        <div className='navBar' >
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'  >
                    Home
                </NavLink>
            </nav>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/tracker' >
                    Tracker
                </NavLink>
            </nav>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/about' >
                    About
                </NavLink>
            </nav>
        </div>
     );
}
 
export default NavBar;