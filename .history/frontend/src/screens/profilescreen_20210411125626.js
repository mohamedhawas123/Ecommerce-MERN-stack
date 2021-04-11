import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {UserDetail, updateUserProfile} from '../store/actions/user'
import FormContainer from '../components/formcontainer'


const ProfileScrean = ({location, history}) => {

    const [namee, setName] = useState('')
    const [emaill, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)



    const dispatch = useDispatch()

    const userDetails = useSelector(state => state)
    console.log(userDetails.user.userLogin)
   // const userDetaill = userDetails.user.userLogin
    
   const {name, email} = userDetails.user.userLogin.userInfo 
   
   
    
    const userLogin = useSelector(state => state.user)
    console.log(userLogin.userLogin.userInfo.token)
    const token = userLogin.userLogin.userInfo.token
    const {userInfo, loading, error,  } = userLogin

    
    const Sucess = useSelector(state => state.user.success)

    useEffect(() => {
        dispatch(UserDetail('profile'))
        setName(name)
        setEmail(email)
    }, [dispatch, history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUserProfile(namee, emaill, userLogin.userInfo.token ))
        console.log("works")
       
    }


    return (
      

        <Row>
            <Col md={3}>

            <h1>User Profile Detail</h1>
        {error && <Message variant="danger">{error}</Message>}
        {Sucess && <Message variant="success">Profile Updated</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>

        <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                 type="name"
                  placeholder="Enter name"
                  value={namee}
                onChange={(e)=> setName(e.target.value) }>

                </Form.Control>
            </Form.Group>


            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                 type="email"
                  placeholder="Enter email"
                  value={emaill}
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
                Update
            </Button>


        </Form>


            </Col>

        <Col md={9}>
            <h2>My Orders</h2>
        </Col>

        </Row>

    )
}

export default ProfileScrean