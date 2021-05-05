import React, {useEffect, useState} from 'react'
import {Form, Button, Table, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import Loader  from '../components/Loader'
import {productList} from '../store/actions/productlist'
import {LinkContainer} from 'react-router-bootstrap'
import {deleteProduct, createProduct} from '../store/actions/productlist'
import {PRODUCT_CREATE_REST} from '../store/actions/actionTypes'
import Paginate from '../components/pageinate'

const ProductListScrean = ({history, match}) => {

    const dispatch = useDispatch()

    const pageNumber = match.params.pageNumber || 1

    const productListt = useSelector(state => state.Product)
    const {loading, error, products, page, pages} = productListt

    const userLogin = useSelector( (state) => state.user )
    const {userInfo} = userLogin


    const getSucess= useSelector((state) => state.Product)
    const {success, loading: loadingDelete, error: errorDelete} = getSucess


    const creatProduct = useSelector(state => state.Product)
    const {loading: loadingCreate, error: errorLoading, success:successCreate, product: createdProduct } = creatProduct 

    useEffect( () => {
        // dispatch({type:PRODUCT_CREATE_REST})


        if(!userInfo.isAdmin) {
            history.push('/')
        }

        if (successCreate) {
            history.push(`product/${createdProduct._id}/edit`)
        }else {
            dispatch(productList('', pageNumber))
        }
        
    }, [dispatch, history,userInfo, success, successCreate, createdProduct ])


    const deleteHandlee = (id) => {
        if(window.confirm("Are you sure")) {
            dispatch(deleteProduct(id))
            history.push('/admin/productlist')
            
        }
        
    }

    const createProducthandle = () => {
        
        dispatch(createProduct())
    }

    return (
        <div>

            <Row className="align-items-center">
                <Col>
                <h1>Products</h1>
                </Col>

                <Col className="text-right">
                    <Button className="my-3" onClick={createProducthandle}>
                       <i className="fas fa-plus"></i> Create Product
                    </Button>
                </Col>
            </Row>

            {loadingDelete && <Loader />}
            {errorDelete && <Message variant="danger">{errorDelete}</Message>}

            {loadingCreate && <Loader />}
            {errorLoading && <Message variant="danger">{errorLoading}</Message>}


            {loading ? <Loader />: error ? <Message variant="danger">{error}</Message>: (
                <React.Fragment>
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
                        
                        {products && products.map(product => (
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
                                    <LinkContainer to={`product/${product._id}/edit/`}>
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
                    </tbody>

                </Table>

                <Paginate pages={pages} page={page} />

                </React.Fragment>
                
            )}
        </div>
    )
}

export default ProductListScrean