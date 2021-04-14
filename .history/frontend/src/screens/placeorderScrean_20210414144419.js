import React, {useEffect, useState} from 'react'
import {Form, Button, Col, Row ,ListGroup, Image, Card} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/formcontainer'
import CheckoutSteps from '../components/checkoutSteps'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import {createOrder} from '../store/actions/ordercreate'



const PlaceOrderScrean = ({history}) => {


    const dispatch = useDispatch()

    const addDecimals = (num) => {
        return (Math.round(num *100) / 100).toFixed(2)
    }

    const cart = useSelector(state => state.cart)

    cart.itemsPrice = cart.cartItems.reduce( (acc, item) => acc + item.price * item.qty, 0 )

    cart.shippingPrice = cart.cartItems > 100 ? 0: 100 

    cart.taxPrice = addDecimals(Number((0.15* cart.itemsPrice).toFixed(2) ))

    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)
    

    const orderCreate = useSelector(state => state.ordercreate)

    const {order, loading, success} = orderCreate


    useEffect( () => {
        if(success) {
            history.push(`/order/${order._id}`)
        }
    }, [history, success])

    const placeOrderHandler =() => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymenthMethod,
            itemsPrice: cart.itemsPrice ,
            taxPrice: cart.taxPrice,
            shippingPrice :cart.shippingPrice ,
            totalPrice : cart.totalPrice
        }))
    }
    
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
                
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                    <h2>Order Summary</h2>
                                </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>${cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>


                            <ListGroup.Item>
                                <Row>
                                    <Col>shipping</Col>
                                    <Col>${cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>${cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>${cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                         /** {error && <Message variant="danger">{error}</Message>} */       
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button
                                 type="button"
                                  className="btn-block"
                                  disabled={cart.cartItems.length === 0}
                                    onClick={placeOrderHandler}>Place Order</Button>

                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>

            </Row>

        </div>
    )
}

export default PlaceOrderScrean