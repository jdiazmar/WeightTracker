import React from 'react';
import './NavBar.scss';

const NavBar = () => {
    return ( 
        <div className='navBar' >
            <ul>
                <li>
                    <button>HOME</button>
                </li>
                <li>
                    <button>TRACKER</button>
                </li>
                <li>
                    <button>ABOUT</button>
                </li>
            </ul>
        </div>
     );
}
 
export default NavBar;