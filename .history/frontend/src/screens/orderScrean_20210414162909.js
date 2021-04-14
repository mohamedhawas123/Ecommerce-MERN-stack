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
    : <div>
        <h1>Order {order._id}</h1>
    </div>
}

export default OrderScrean