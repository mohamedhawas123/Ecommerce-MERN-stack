import React, {useEffect, useState} from 'react'
import {Form, Button, Col, Row ,ListGroup, Image, Card} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/formcontainer'
import CheckoutSteps from '../components/checkoutSteps'
import Message from '../components/Message'


const PlaceOrderScrean = () => {

    const cart = useSelector(state => state.cart)

    
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address</strong>
                             {' '}   {cart.shippingAddress.address}, {cart.shippingAddress.city}, {' '}
                                {cart.shippingAddress.postelCode}, {' '}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment</h2>
                            <p>
                                <strong>Method: </strong>
                             {cart.paymenthMethod}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>

                        <h2>Order Items</h2>
                        {cart.cartItems.length === 0 ? <Message>Your Cart is Empty</Message>
                         : (
                             <ListGroup.Item>

                                 {cart.cartItems.map((item, index) => {
                                     return (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name}
                                                    fluid rounded  />

                                                </Col>
                                                <Col>
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
            
                                                </Col>


                                                <Col md={4}>
                                                    {item.qty} X ${item.price} = ${item.qty * item.price}
                                                </Col>

                                            </Row>
                                         </ListGroup.Item>
                                     )
                                 })}

                            </ListGroup.Item>
                         )
                          }

                        </ListGroup.Item>


                    </ListGroup>
                </Col>
            </Row>

        </div>
    )
}

export default PlaceOrderScrean