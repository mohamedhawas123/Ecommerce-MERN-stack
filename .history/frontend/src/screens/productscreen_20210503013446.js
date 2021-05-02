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
import Message from '../components/Message'


const ProductScreen = (props) => {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [Comment, setComment] = useState('')

    const productReviewCreate = useSelector(state => state.Product)
    const{success: successReview, loading:loadingReview, error: errorReview} = productReviewCreate

    const userLogin = useSelector( (state) => state.user )
    const {userInfo} = userLogin
    
    const dispatch = useDispatch()

    const {product} = props
    console.log(product)
    
   // const [product, setProduct] = useState([])
    
    useEffect( () => {

        if(successReview) {
            alert("Review Submitted !")
            setRating(0)
            setComment('')
            dispatch({type: PRODUCT_UPDATE_REVIEW_REST})
        }
       
        // const fetchdata = async () => {
        //     const {data} = await axios.get(`/api/products/${match.params.id}`)
        //     setProduct(data)
        // }

        // fetchdata()


        props.fetchData(props.match.params.id)


    }, [dispatch, props.match, successReview] )


    const addToCartHandler = () => {
        props.history.push(`/cart/${props.match.params.id}?qty=${qty}`)
    }

    

    const submitHandler = (e) => {
        e.preventDefault()
        console.log()
        dispatch(createproductReview(props.match.params.id, {
            rating, 
            Comment
        }))
    }

    console.log(comment)

    return (
        <React.Fragment>
            <Link className="btn btn-dark my-3" to ="/">
                Go Back
            </Link>
            {
                product ? (
                    <React.Fragment>
                        
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
            
            <Row>
                <Col md={6}>
                    <h2>Reviews</h2>
                    {product.review && product.review.length === 0 && <Message>No Reviews </Message>}
                    <ListGroup variant="flush">
                        {product.review && product.review.map(review => (
                            <ListGroup.Item key={review._id}>
                                <strong>{review.name}</strong>
                            <Rating value={review.rating} />
                            <p>{review.createdAt.substring(0, 10)}</p>
                            <p>{review.Comment}</p>
                            </ListGroup.Item>
                            

                        ))}
                        <ListGroup.Item>
                            <h2>Write a Customer Review</h2>
                            {errorReview && <Message variant="danger">{errorReview}</Message>}
                            {
                            userInfo ? 
                            (
                                <Form onSubmit={submitHandler}>
                                    <Form.Group controlId="rating" >
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control as="select" value={rating}
                                        onChange={(e) => setRating(e.target.value)}>
                                            <option value="">Select...</option>
                                            <option value="1">1 - Poor</option>
                                            <option value="2">2 - Fair</option>
                                            <option value="3">3 - Good</option>
                                            <option value="4">4 - Very Good</option>
                                            <option value="5">5 - Excellent</option>
                                        </Form.Control>
                                        
                                    </Form.Group>

                                    <Form.Group controlId="comment">
                                            <Form.Label>Comment</Form.Label>
                                            <Form.Control as="textarea" row='3'
                                            value={Comment}
                                            onChange={(e) => setComment(e.target.value)}>
                                                
                                            </Form.Control>

                                        </Form.Group> 

                                        <Button type="submit" variant="primary">
                                            Submit
                                        </Button>

                                </Form>
                            ):
                             <h2>please Sign it to review <Link to="/login">here</Link> </h2> }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

                    </React.Fragment>
                   

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