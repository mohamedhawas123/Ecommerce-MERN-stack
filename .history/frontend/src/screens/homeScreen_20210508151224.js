import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/product'
import axios from 'axios'
import { connect } from "react-redux";
import {productList} from '../store/actions/productlist'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {useDispatch, useSelector} from 'react-redux'
import Paginate from '../components/pageinate'
import ProductCarsouel from '../components/topproductcursol'


const HomeScreen = (props) => {
 
    //const [products, setProducts] = useState([])


    const dispatch= useDispatch()

    const keyword = props.match.params.keyword

    const pageNumber = props.match.params.pageNumber || 1

    useEffect( () => {
        
        dispatch(productList(keyword, pageNumber))
        
    }, [dispatch, pageNumber ,keyword] )


    const {error, loading, products} = props
    const {page, pages} = products
    console.log(props)
    return (
       
        <div>
            {!keyword && <ProductCarsouel /> }
            <h1>Latest Products</h1>
           {loading ? (<Loader />): error ? (<Message variant="danger">{error}</Message>) : 

           <React.Fragment>
               <Row>
                {products.products.map(product => {
                    return (
                        <Col key={product._id} sm={12} md={16} lg={4}>
                            <Product product={product} />
                        </Col>
                    )
                })}
            </Row>
            <Paginate pages={pages} page={page} keyword={keyword ? keyword: ''} />
           </React.Fragment>
            
             }
            
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        products: state.Product,
        error:state.Product.error,
        loading: state.Product.loading
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (keyword) => dispatch(productList(keyword))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)