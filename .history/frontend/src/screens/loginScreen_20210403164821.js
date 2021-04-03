import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {authLogin} from '../store/actions/user'
import FormContainer from '../components/formcontainer'


const LoginScrean = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <FormContainer>

        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
                <Form.Label></Form.Label>
            </Form.Group>
        </Form>

        </FormContainer>
    )
}