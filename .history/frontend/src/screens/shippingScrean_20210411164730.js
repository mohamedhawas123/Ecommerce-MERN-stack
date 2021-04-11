import React, {useEffect, useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/formcontainer'
import {saveShippingAddress} from '../store/actions/cart'
import CheckoutSteps from '../components/checkoutSteps'



const ShippingAddres = ({history}) => {


    const cart = useSelector(state => state.cart)
    
    const shippingAddress = cart.shippingAddress

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postelCode, setPostelCode] = useState(shippingAddress.postelCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()


    

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("continue")
        dispatch(saveShippingAddress({address, city, postelCode, country }))
        history.push('/payment')
    }

    


    return (
        <FormContainer>
            <CheckoutSteps />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId="Address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                 type="text"
                  placeholder="Enter Address"
                  value={address}
                onChange={(e)=> setAddress(e.target.value) }>

                </Form.Control>
            </Form.Group>

            <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                 type="text"
                  placeholder="Enter City"
                  value={city}
                onChange={(e)=> setCity(e.target.value) }>

                </Form.Control>
            </Form.Group>

            <Form.Group controlId="postelCode">
                <Form.Label>postelCode</Form.Label>
                <Form.Control
                 type="text"
                  placeholder="Enter PostelCode"
                  value={postelCode}
                onChange={(e)=> setPostelCode(e.target.value) }>

                </Form.Control>
            </Form.Group>


            <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control
                 type="text"
                  placeholder="Enter Country"
                  value={country}
                onChange={(e)=> setCountry(e.target.value) }>

                </Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
                Continue
            </Button>


            </Form>
        </FormContainer>
    )
}

export default ShippingAddres