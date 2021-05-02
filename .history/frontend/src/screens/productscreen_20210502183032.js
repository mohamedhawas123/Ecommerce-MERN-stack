import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/rating'
import axios from 'axios'
import {productDetail, createproductReview} from '../store/actions/productlist'
import { connect } from "react-redux";
import Form from 'react-bootstrap/Form'
import {PRODUCT_UPDATE_REVIEW_REST} from '../store/actions/actionTypes'
import {useDispatch, useSelector} from 'react-redux'



const ProductScreen = (props) => {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const productReviewCreate = useState(state => state.Product)
    const{success: successReview, loading:loadingReview, error: errorReview}
    
    
   // const [product, setProduct] = useState([])
    
    useEffect( () => {
       
        // const fetchdata = async () => {
        //     const {data} = await axios.get(`/api/products/${match.params.id}`)
        //     setProduct(data)
        // }

        // fetchdata()


        props.fetchData(props.match.params.id)


    }, [props.match] )


    const addToCartHandler = () => {
        props.history.push(`/cart/${props.match.params.id}?qty=${qty}`)
    }

    const {product} = props
    console.log(product)

    return (
        <React.Fragment>
            <Link className="btn btn-dark my-3" to ="/">
                Go Back
            </Link>
            {
                product ? (
                    <Row>
                <Col md={6}>
                <Image src={product.image} alt={product.name} />
                </Col>

                <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews `} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    Description: ${product.description}
                    </ListGroup.Item>

                </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Price:
                                </Col>
                                
                                <Col>
                                <strong>${product.price}</strong>
                                </Col>

                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Status:
                                </Col>
                                
                                <Col>
                               {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>

                            </Row>
                        </ListGroup.Item>


                    </ListGroup>

                    {product.countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>Qty</Col>
                                <Col>
                                <Form.Control as="select" value={qty} onChange={(e) => {
                                    setQty(e.target.value)
                                }}>

                                {
                                    [...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x+1} value={x+1} >
                                            {x+1}
                                        </option>
                                    ))
                                }
                                    
                                </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}


                    <ListGroup.Item>
                            <Button onClick={addToCartHandler} className="btn-block" type="button" disabled={product.countInStock ===0 } >
                                Add To Cart
                            </Button>
                        </ListGroup.Item>

                </Col>

            </Row>
                ): null
            }
            


        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        product: state.Product.product,
        error:state.Product.error,
        loading: state.Product.loading
    }
    
    
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (id) => dispatch(productDetail(id))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen)