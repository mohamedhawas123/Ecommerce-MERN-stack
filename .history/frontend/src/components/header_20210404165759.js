import React, {Compoent} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'



const Header = () =>  {

        const userLogin = useSelector(state => state.user)
        const  {userInfo} = userLogin

        return (
            <Navbar bg="dark" variant='dark' expand ="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                      
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-basic-nav">
                    <Nav className="ml-auto">


                        <LinkContainer to="/cart" >
                        <Nav.Link> <i className="fas fa-shopping-cart"></i></Nav.Link>
                        </LinkContainer>

                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id="username"></NavDropdown>
                        ):  <LinkContainer to="/login" >
                        <Nav.Link> <i className="fas fa-user"></i></Nav.Link>
                        </LinkContainer> }
                        
                       
                        
                    </Nav>
                </Navbar.Collapse>
                </Container>
              
                
            </Navbar>
        )
    
}

export default Header 