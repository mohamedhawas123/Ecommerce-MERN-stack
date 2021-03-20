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

    useEffect( () => {
        if(productId) {
            dispatch(addToCart(productId, it))
        }
        localStorage.setItem("cartItems", JSON.stringify( it )
    }, [dispatch, productId,] )

    console.log(it)

   return (
       <div>
           Cart
       </div>
   ) 
}

const mapStateToProps = (state) => {
    return {
        it: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(CartScrean)