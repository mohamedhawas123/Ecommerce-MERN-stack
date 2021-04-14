import React, {useEffect, useState} from 'react'
import {Form, Button, Col, Row ,ListGroup, Image, Card} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/formcontainer'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import {getOrder} from '../store/actions/ordercreate'
import Loader  from '../components/Loader'



const OrderScrean = ({match}) => {

    const orderId = match.params.id

    const dispatch = useDispatch()

    const addDecimals = (num) => {
        return (Math.round(num *100) / 100).toFixed(2)
    }

    const cart = useSelector(state => state.cart)

   

    const getCreate = useSelector(state => state.ordercreate)

    const {order, loading, error} = getCreate


    useEffect( () => {
        dispatch(getOrder(orderId))
    }, [])

    
    
    return loading ? <Loader /> : error ? <Message variant="danger">{error}</Message>
    : <React.Fragment>
        <h1>Order {order._id}</h1>
        <div>
           
            <Row>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address</strong>
                             {' '}   {order.shippingAddress.address}, {order.shippingAddress.city}, {' '}
                                {order.shippingAddress.postelCode}, {' '}
                                {order.shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment</h2>
                            <p>
                                <strong>Method: </strong>
                             {order.paymenthMethod}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>

                        <h2>Order Items</h2>
                        {cart.orderItems.length === 0 ? <Message>Your Cart is Empty</Message>
                         : (
                             <ListGroup.Item>

                                 {cart.orderItems.map((item, index) => {
                                     return (
                                        <ListGroup.Item key={index} >
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
                                {/* {error && <Message variant="danger">{order}</Message>} */}
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
    </React.Fragment>
}

export default OrderScrean