import React, {Compoent} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../store/actions/user'
import SearchBox from './searchbox'
import {Route} from 'react-router-dom'




const Header = () =>  {
    
        const dispatch =useDispatch()

        const userLogin = useSelector(state => state.user)
        const  {userInfo} = userLogin


        const logoutHandler = ()=> {
            dispatch(logout())
        }

        return (
            <Navbar bg="dark" variant='dark' expand ="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                      
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-basic-nav">
                    <SearchBox />
                    <Nav className="ml-auto">


                        <LinkContainer to="/cart" >
                        <Nav.Link> <i className="fas fa-shopping-cart"></i></Nav.Link>
                        </LinkContainer>

                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id="username">
                                <LinkContainer to="/profile">
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>

                            <NavDropdown.Item onClick={logoutHandler} > Logout </NavDropdown.Item>

                            </NavDropdown>
                        ):  <LinkContainer to="/login" >
                        <Nav.Link> <i className="fas fa-user"></i></Nav.Link>
                        </LinkContainer> }

                        {userInfo && userInfo.isAdmin && (
                            <NavDropdown title="Admin" id="adminmenu">
                            <LinkContainer to="/admin/userlist">
                                <NavDropdown.Item>Users</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to="/admin/productlist">
                                <NavDropdown.Item>Products</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to="/admin/orderlist">
                                <NavDropdown.Item>Orders</NavDropdown.Item>
                            </LinkContainer>


                        </NavDropdown>
                        )}
                        
                       
                        
                    </Nav>
                </Navbar.Collapse>
                </Container>
              
                
            </Navbar>
        )
    
}

export default Header 