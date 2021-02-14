import React, {Compoent} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'



const Header = () =>  {
    
        return (
            <Navbar bg="dark" variant='dark' expand ="lg" collapseOnSelect>
                <Container>
                      <Navbar.Brand href="/">ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-basic-nav">
                    <Nav className="ml-auto">

                        <Nav.Link href="/cart"> <i className="fas fa-shopping-cart"></i></Nav.Link>
                        <Nav.Link href="/cart"><i className="fas fa-user"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
              
                
            </Navbar>
        )
    
}

export default Header 