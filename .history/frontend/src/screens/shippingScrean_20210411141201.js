import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/formcontainer'



const ShippingAddres = ({history}) => {

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postelCode, setPostelCode] = useState('')
    const [country, setCountry] = useState('')

    

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
            </Form>
        </FormContainer>
    )
}

export default ShippingAddres