import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import './Page.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header(){
    return(
        <div id="header">
            <Navbar id="nav" bg="light" expand="lg" >
                <Nav className="nav-items">
                    <Navbar.Brand href="#" id="prime-title" >PRIMESPOT
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/></Navbar.Brand>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Order</Nav.Link>
                            <Nav.Link>Company</Nav.Link>
                            <Nav.Link>FAQ</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                            <Nav.Link><ShoppingCartIcon fontSize="small" id="shoppingcarticon" /></Nav.Link>
                        </Navbar.Collapse>   
                </Nav>
            </Navbar>
        </div>
    );
}
export default Header;