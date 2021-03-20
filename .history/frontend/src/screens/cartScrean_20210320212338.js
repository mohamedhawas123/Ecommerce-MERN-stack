import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link} from 'react-router-bootstrap'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import {addToCart} from '../store/actions/cart'


const CartScrean = ({match, history, location}) => {
    

    const productId = match.params.id

    const qty = location.seacrch
    console.log(qty)


   return (
       <div>
           Cart
       </div>
   ) 
}


export default CartScrean