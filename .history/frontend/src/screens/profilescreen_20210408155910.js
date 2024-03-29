import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {UserDetail} from '../store/actions/user'
import FormContainer from '../components/formcontainer'


const ProfileScrean = ({location, history}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)



    const dispatch = useDispatch()

    const userDetail = useSelector(state => state.user)
    const {loading, userInfo, error, userDetail} = userRegister

    
    const userLogin = useSelector(state => state.user)
    const {loading, userInfo, error} = userLogin

    useEffect(() => {
        if(!userInfo) {
            history.push('/login')
        }else {

        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(authSignup(name, email, password))
    }


    return (
        <FormContainer>

        <h1>Sign In</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>

        <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                 type="name"
                  placeholder="Enter name"
                  value={name}
                onChange={(e)=> setName(e.target.value) }>

                </Form.Control>
            </Form.Group>


            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                 type="email"
                  placeholder="Enter email"
                  value={email}
                onChange={(e)=> setEmail(e.target.value) }>

                </Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>password</Form.Label>
                <Form.Control
                 type="password"
                  placeholder="Enter password"
                  value={password}
                onChange={(e)=> setPassword(e.target.value) }>

                </Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
                Sign UP
            </Button>


        </Form>


        <Row className="py-3">
            <Col>
            New Customer ? <Link to={redirect ? `/login?redirect=${redirect}`: '/login'} > 
            Regsiter
             </Link>
            </Col>
        </Row>

        </FormContainer>
    )
}

export default ProfileScrean