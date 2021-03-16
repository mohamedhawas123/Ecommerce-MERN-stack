import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/product'
import axios from 'axios'
import { connect } from "react-redux";
import {productList} from '../store/actions/productlist'


const HomeScreen = (props) => {
 
    //const [products, setProducts] = useState([])

    useEffect( () => {
        
        props.fetchData()
        
    }, [] )


    const {error, loading, products} = props
    return (
       
        <div>
            <h1>Latest Products</h1>
           {loading ? (<h2>Loading...</h2>): error ? (<h3>{error}</h3>) : 
            <Row>
                {products.map(product => {
                    return (
                        <Col key={product._id} sm={12} md={16} lg={4}>
                            <Product product={product} />
                        </Col>
                    )
                })}
            </Row>
             }
            
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        products: state.Product.products,
        error:state.Product.error,
        loading: state.Product.loading
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(productList())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)