import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/product'
import axios from 'axios'



const HomeScreen = () => {
 
    const [products, setProducts] = useState([])

    useEffect( () => {
        axios.get('/api/products')
        .then(res => {
            console.log(res.data)
            setProducts(res.data)
        })
    } )

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