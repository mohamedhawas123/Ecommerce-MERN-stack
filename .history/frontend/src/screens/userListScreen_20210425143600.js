import React, {useEffect, useState} from 'react'
import {Form, Button, Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import Loader  from '../components/Loader'
import {listUser, deleteUser} from '../store/actions/user'
import {LinkContainer} from 'react-router-bootstrap'


const UserListScrean = ({history}) => {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.user)
    const {loading, error, users} = userList

    const userLogin = useSelector( (state) => state.user )
    const {userInfo} = userLogin


    const userDelete = useSelector((state) => state.user)
    const {success} = userDelete


    useEffect( () => {
        if(userInfo && userInfo.isAdmin) {
            dispatch(listUser())
        }else {
            history.push('/login ')
        }
        
    }, [dispatch, history, success])


    const deleteHandlee = (id) => {
        if(window.confirm("Are you sure")) {
            dispatch(deleteUser(id))
        }
        
    }

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
                                    <LinkContainer to={`user/${user._id}/edit`}>
                                        <Button variant="light" className="btn-sm">
                                            <i className="fas fa-edit"></i>
                                        </Button>
                                    </LinkContainer>

                                    

                                        <Button variant="danger" className="btn-sm"
                                        onClick={() => deleteHandlee(user._id)}>
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

export default UserListScrean