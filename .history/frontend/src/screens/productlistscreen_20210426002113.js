import React, {useEffect, useState} from 'react'
import {Form, Button, Table, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import Loader  from '../components/Loader'
import {productList} from '../store/actions/productlist'
import {LinkContainer} from 'react-router-bootstrap'
import {deleteProduct} from '../store/actions/productlist'


const ProductListScrean = ({history, match}) => {

    const dispatch = useDispatch()

    const productListt = useSelector(state => state.Product)
    const {loading, error, products} = productListt

    const userLogin = useSelector( (state) => state.user )
    const {userInfo} = userLogin


    const getSucess= useSelector((state) => state.Product)
    const {success, loading: loadingDelete, error: errorDelete} = getSucess


    useEffect( () => {
        if(userInfo && userInfo.isAdmin) {
            dispatch(productList())
        }else {
            history.push('/login ')
        }
        
    }, [dispatch, history,userInfo, success ])


    const deleteHandlee = (id) => {
        if(window.confirm("Are you sure")) {
            dispatch(deleteProduct(id))
            
        }
        
    }

    const createProduct = () => {
        console.log("created")
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

            {loadingDelete && <Loader />}
            {errorDelete && <Message variant="danger">{errorDelete}</Message>}


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
                        {products !== null ? (
                            {products.map(product => (
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>
                                        $ {product.price}
                                    </td>
                                    
                                    <td>
                                        {product.category}
                                    </td>
    
                                    <td>{product.brand}</td>
    
                                    <td>
                                        <LinkContainer to={`admin/product/${product._id}/edit/`}>
                                            <Button variant="light" className="btn-sm">
                                                <i className="fas fa-edit"></i>
                                            </Button>
                                        </LinkContainer>
    
                                        
    
                                            <Button variant="danger" className="btn-sm"
                                            onClick={() => deleteHandlee(product._id)}>
                                                <i className="fas fa-trash"></i>
                                                </Button>
    
                                    </td>
    
                                </tr>
                            ))}
                        ):(<Loader />) }
                        
                    </tbody>

                </Table>
            )}
        </div>
    )
}

export default ProductListScrean