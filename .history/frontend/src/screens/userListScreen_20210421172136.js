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

    return
}