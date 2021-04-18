import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col, Table} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {UserDetail, updateUserProfile} from '../store/actions/user'
import {listMyOrders} from '../store/actions/ordercreate'
import FormContainer from '../components/formcontainer'
import axios from 'axios'


const ProfileScrean = ({location, history}) => {

    const [namee, setName] = useState('')
    const [emaill, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)



    const dispatch = useDispatch()

    const userDetails = useSelector(state => state)
    console.log(userDetails.user.userLogin)
   // const userDetaill = userDetails.user.userLogin
    
   const {name, email} = userDetails.user.userInfo 
   
   
    
    const userLogin = useSelector(state => state.user)
   
    const token = userLogin.userInfo.token
    const {userInfo, loading, error,  } = userLogin

    
    const Sucess = useSelector(state => state.user.success)

    const orderMylist = useSelector(state => state.ordercreate) 
    const {orders, loading: loadingOrers, error: errorOrders} = orderMylist

    useEffect(() => {
        dispatch(UserDetail('profile'))
        dispatch(listMyOrders())
        setName(name)
        setEmail(email)
    }, [dispatch, history, userInfo, name, email])

    const submitHandler = (e) => {
        // e.preventDefault()
        // dispatch(updateUserProfile(namee, emaill, userLogin.userInfo.token ))
        console.log("works")
        const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                }
        axios.put(`api/users/profile`, {
            name:namee,
            email: emaill
        }, config)
       
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
            {loadingOrers ? <Loader /> : errorOrders ? <Message variant="danger">
                {errorOrders}</Message>: (
                    <Table striped bordered hover responsive className="table-sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DATA</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>DELIVERED</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map(order => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.createdAt}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>
                                        {order.isPaid ? (
                                            order.paidAt.substring(0,10)):(
                                                <i className="fas fa-times" stlye={{color:'red'}}></i>
                                            
                                        )}
                                    </td>

                                    <td>
                                        {order.isDelivered ? (
                                            order.deliveredAt.substring(0,10)):(
                                                <i className="fas fa-times" stlye={{color:'red'}}></i>
                                            
                                        )}
                                    </td>


                                    <td>
                                        <LinkContainer to={`/order/${order._id}`}>
                                            <Button className="btn-sm" variant="light">Details</Button>
                                        </LinkContainer>
                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                ) }
        </Col>

        </Row>

    )
}

export default ProfileScrean