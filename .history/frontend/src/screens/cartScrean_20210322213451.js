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

    console.log(it)

   return (
       <Row>
           <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? <Message>Your cart is empty <Link to="/">Go Back</Link> </Message>: (
                <ListGroup variant="flush">
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.data.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.data.image} alt={item.name} alt rounded />
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
           </Col>
                
            <Col md={2}>


            </Col>

            <Col md={2}>

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