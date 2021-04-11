import React, {useEffect, useState} from 'react'
import {Form, Button, Col, ListGroup, Image, Card} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/formcontainer'
import CheckoutSteps from '../components/checkoutSteps'


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
                                <Strong>Address</Strong>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city}
                                {cart.shippingAddress.postelCode},
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

        </div>
    )
}

export default PlaceOrderScrean