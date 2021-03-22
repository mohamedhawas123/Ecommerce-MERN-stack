import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link} from 'react-router-bootstrap'
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
            {cartItems.length === 0 ? <h1>empty</h1>: (
                <ListGroup variant="flush"></ListGroup>
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