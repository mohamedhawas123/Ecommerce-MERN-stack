import React, {useEffect, useState} from 'react'
import {Form, Button, Table, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import Loader  from '../components/Loader'
import {productList} from '../store/actions/productlist'
import {LinkContainer} from 'react-router-bootstrap'


const ProductListScrean = ({history, match}) => {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.Product)
    const {loading, error, products} = productList

    const userLogin = useSelector( (state) => state.user )
    const {userInfo} = userLogin




    useEffect( () => {
        if(userInfo && userInfo.isAdmin) {
            dispatch(productList())
        }else {
            history.push('/login ')
        }
        
    }, [dispatch, history,userInfo ])


    const deleteHandlee = (id) => {
        if(window.confirm("Are you sure")) {
            // Delete Product
        }
        
    }

    return (
        <div>

            <Row className="align-items-center">
                <Col>
                <h1>Products</h1>
                </Col>

                <Col className="text-right">
                    <Button className="my-3" onClick={createProduct}>
                       <i className="fas fa-plus"></i> Create Product
                    </Button>
                </Col>
            </Row>


            {loading ? <Loader />: error ? <Message variant="danger">{error}</Message>: (
                <Table striped bordered hover responsive className="table-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>BRAND</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map(user => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>
                                    <a href={`mailto:${user.email}`}>{user.email}</a>
                                </td>
                                
                                <td>
                                    {user.isAdmin ? (
                                        <i className="fas fa-check" style={{color:'green'}}></i>
                                    ): (
                                        <i className="fas fa-times" style={{color: 'red'}}></i>
                                    )}
                                </td>

                                <td>
                                    <LinkContainer to={`user/${user._id}/edit/`}>
                                        <Button variant="light" className="btn-sm">
                                            <i className="fas fa-edit"></i>
                                        </Button>
                                    </LinkContainer>

                                    

                                        <Button variant="danger" className="btn-sm"
                                        onClick={() => deleteHandlee(user._id)}>
                                            <i className="fas fa-trash"></i>
                                            </Button>

                                </td>

                            </tr>
                        ))}
                    </tbody>

                </Table>
            )}
        </div>
    )
}

export default ProductListScrean