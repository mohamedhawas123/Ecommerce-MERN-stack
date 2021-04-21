import React, {useEffect, useState} from 'react'
import {Form, Button, Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import Loader  from '../components/Loader'
import {listUser} from '../store/actions/user'


const userListScrean = () => {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.user)
    const {loading, error, users} = userList


    useEffect( () => {
        dispatch(listUser())
    }, [dispatch])

    return (
        <div>
            <h1>Users</h1>
            {loading ? <Loader />: error ? <Message variant="danger">{error}</Message>: (
                <Table striped bordered hover responsive className="table-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>E-MAIL</th>
                            <th>Admin</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>
                                    <a href={`mailto:${user.email}`}>{user.email}</a>
                                </td>
                                
                                <td>
                                    {user.isAdmin ? (
                                        <i className="fas fa-check" style={{color:'green'}}></i>
                                    ): (
                                        <i className="fas fa-times" style={{color: 'red'}}></i>
                                    )}
                                </td>

                                <td>
                                    <LinkContainer to={`/user/${user._id}/edit`}>
                                        <Button variant="light" className="btn-sm">
                                            <i className="fas fa-edit"></i>
                                        </Button>
                                    </LinkContainer>

                                        <Button variant="danger" className="btn-sm"
                                        onClick={() => deleteHandle(user._id)}>
                                            <i className="fas fa-trash"></i>
                                            </Button>

                                </td>

                            </tr>
                        ))}
                    </tbody>

                </Table>
            )}
        </div>
    )
}