import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import {addToCart} from '../store/actions/cart'
import {connect} from 'react-redux'


const CartScrean = ({match, history, location, it}) => {
    

    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {cartItems} =   cart
    console.log(cartItems)

    useEffect( () => {
        dispatch(addToCart(productId, qty ))
        
    }, [dispatch, productId, qty ] )

    const removeFromCartHandler = (id) => {
        console.log("removed")
    }

    console.log(it)

   return (
       <Row>
           <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? <Message>Your cart is empty <Link to="/">Go Back</Link> </Message>: (
                <ListGroup variant="flush">
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} alt rounded />
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>${item.price}</Col>
                                <Col md={2}>
                                <Form.Control as="select" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value))) }>

                                {
                                    [...Array(item.countInStock).keys()].map((x) => (
                                        <option key={x+1} value={x+1} >
                                            {x+1}
                                        </option>
                                    ))
                                }
                                    
                                </Form.Control>
                                </Col>

                                <Col md={2}>
                                <Button tpye="button" variant="light" onClick={() => removeFromCartHandler(item.product)}>
                                <i className="fas fa-trash"></i>
                                </Button>
                                </Col>


                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
           </Col>
                
            <Col md={4}>
            
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>Subtotal ( {cartItems.reduce( (acc, cur) => acc+cur.qty, 0 )} ) item </h2>
                        
                        ${cartItems.reduce((acc, item) => acc + item.qty * itemprice, 0).toFixd(2) }

                    </ListGroup.Item>
                </ListGroup>
            </Card>

            </Col>

            

       </Row>
   ) 
}

const mapStateToProps = (state) => {
    return {
        it: state
    }
}

export default connect(mapStateToProps)(CartScrean)


// if(productId) {
//     dispatch(addToCart(productId))
//     localStorage.setItem("cartItems", JSON.stringify(it.cart.cartItems))

//     console.log(it.cart.cartItems)

// }