import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {UserDetail, updateUserProfile} from '../store/actions/user'
import FormContainer from '../components/formcontainer'


const ProfileScrean = ({location, history}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)



    const dispatch = useDispatch()

    const userDetails = useSelector(state => state)
    console.log(userDetails.user.userDetail)
    const userDetaill = userDetails.user
   
   
    
    const userLogin = useSelector(state => state.user)
    const {userInfo, loading, error,  } = userLogin

    const Sucess = useSelector(state => state.user.success)

    useEffect(() => {
        dispatch(UserDetail('profile'))
        setName(userDetails.name)
        setEmail(userDetails.email)
    }, [dispatch, history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUserProfile({id: userDetails._id, name, email, password }))
       
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