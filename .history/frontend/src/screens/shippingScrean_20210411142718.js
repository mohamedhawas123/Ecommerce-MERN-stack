import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/formcontainer'



const ShippingAddres = ({history}) => {

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postelCode, setPostelCode] = useState('')
    const [country, setCountry] = useState('')

    

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("continue")
    }


    return (
        <FormContainer>
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