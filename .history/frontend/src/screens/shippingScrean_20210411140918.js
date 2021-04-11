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
        <div>
            Shipping
        </div>
    )
}

export default ShippingAddres