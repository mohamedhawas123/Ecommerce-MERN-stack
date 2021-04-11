import React, {useEffect, useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/formcontainer'
import {saveShippingAddress} from '../store/actions/cart'


const ShippingAddres = ({history}) => {


    const cart = useState(state => state.cart)
    console.log(cart)
    return (
        <h1>hey</h1>
    )
}

export default ShippingAddres