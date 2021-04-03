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
        <div>

        </div>
    )
}