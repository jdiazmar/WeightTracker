import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavBarHead = () => {
    return ( 
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="/about">Pricing</NavLink>
          </Nav>
        </Container>
        </Navbar>
     );
}
 
export default NavBarHead;

{/* <div className='container-navbar' >
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
</div> */}