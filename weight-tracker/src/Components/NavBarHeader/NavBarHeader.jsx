import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBarHead = () => {
    return ( 
        <div className='container-navbar' >
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
 
export default NavBarHead;