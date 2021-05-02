import React, {useEffect, useState} from 'react'
import {Form, Button, Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import Loader  from '../components/Loader'
import {listorderadmin} from '../store/actions/ordercreate'
import {LinkContainer} from 'react-router-bootstrap'


const Orderlistadmin = ({history}) => {

    const dispatch = useDispatch()

    const ordersList = useSelector(state => state.ordercreate)
    const {loading, error, orders} = ordersList

    const userLogin = useSelector( (state) => state.user )
    const {userInfo} = userLogin


    const userDelete = useSelector((state) => state.user)
    const {success} = userDelete


    useEffect( () => {
        if(userInfo && userInfo.isAdmin) {
            dispatch(listorderadmin())
        }else {
            history.push('/login ')
        }
        
    }, [dispatch, history, userInfo])



    return (
        <div>
            <h1>Orders</h1>
            {loading ? <Loader />: error ? <Message variant="danger">{error}</Message>: (
                <Table striped bordered hover responsive className="table-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>DELIVERD</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td>{order.user && order.user.name}</td>
                                <td>{order.createdAt.substring(0,10)}</td>
                                <td> $ {order.totalPrice.substring(0,10)}</td>
                                    
                                
                                <td>
                                    {order.isPaid ? (
                                        order.paidAt.substring(0,10)
                                    ): (
                                        <i className="fas fa-times" style={{color: 'red'}}></i>
                                    )}
                                </td>


                                <td>
                                    {order.isDelivered ? (
                                        order.deliveredAt.substring(0,10)
                                    ): (
                                        <i className="fas fa-times" style={{color: 'red'}}></i>
                                    )}
                                </td>



                                <td>
                                    <LinkContainer to={`order/${order._id}`}>
                                        <Button variant="light" className="btn-sm">
                                            Details
                                        </Button>
                                    </LinkContainer>

                                    

                                    
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </Table>
            )}
        </div>
    )
}

export default Orderlistadmin