import React from 'react'
import products from '../products'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/product'

const HomeScreen = () => {
    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => {
                    return (
                        <Col key={product._id} sm={12} md={16} lg={4}>
                            <Product product={product} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default HomeScreen