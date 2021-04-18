import axios from 'axios'
import React from 'react'
import * as actionTypes from '../actions/actionTypes'


export const createOrder = (order) => async (dispatch, getState) => {

    try {
        dispatch({
            type: actionTypes.ORDER_CREATE_START
        })
    
      //  const {userLogin: {userInfo}} = getState()
    
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization : `Bearer ${getState().user.userInfo.token}`
            }
        }

        console.log(getState().user.userInfo.token)
    
        const {data} = await axios.post('/api/orders', order, config)
    
        dispatch({
            type: actionTypes.ORDER_CREATE_SUCCESS,
            payload: data
        })
    }catch(error) {
        dispatch({
            type: actionTypes.ORDER_CREATE_FAIL,
            payload: error.reponse && error.reponse.data.message ? error.reponse.data.message: error.message
        })
    }

   

}



export const getOrder = (id) => async (dispatch, getState) => {

    try {
        dispatch({
            type: actionTypes.ORDER_GET_START
        })
    
      //  const {userLogin: {userInfo}} = getState()
    
        const config = {
            headers: {
                Authorization : `Bearer ${getState().user.userInfo.token}`
            }
        }

        console.log(getState().user.userInfo.token)
    
        const {data} = await axios.get(`/api/orders/${id}`, config)
    
        dispatch({
            type: actionTypes.ORDER_GET_SUCCESS,
            payload: data
        })
    }catch(error) {
        dispatch({
            type: actionTypes.ORDER_GET_FAIL,
            payload: error.reponse && error.reponse.data.message ? error.reponse.data.message: error.message
        })
    }

   

}



export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {

    try {
        dispatch({
            type: actionTypes.ORDER_PAY_START
        })
    
      //  const {userLogin: {userInfo}} = getState()
    
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization : `Bearer ${getState().user.userInfo.token}`
            }
        }

        console.log(getState().user.userInfo.token)
    
        const {data} = await axios.put(`/api/orders/${orderId}/pay`, paymentResult  ,config)
    
        dispatch({
            type: actionTypes.ORDER_PAY_SUCCESS,
            payload: data
        })
    }catch(error) {
        dispatch({
            type: actionTypes.ORDER_PAY_FAIL,
            payload: error.reponse && error.reponse.data.message ? error.reponse.data.message: error.message
        })
    }

   

}


export const listMyOrders = () => async (dispatch, getState) => {

    try {
        dispatch({
            type: actionTypes.ORDER_LIST_START
        })
    
      //  const {userLogin: {userInfo}} = getState()
    
        const config = {
            headers: {
                
                Authorization : `Bearer ${getState().user.userInfo.token}`
            }
        }

        console.log(getState().user.userInfo.token)
    
        const {data} = await axios.get(`/api/orders/myorders` ,config)
    
        dispatch({
            type: actionTypes.ORDER_LIST_SUCCESS,
            payload: data
        })
    }catch(error) {
        print(error)
        dispatch({
            type: actionTypes.ORDER_LIST_FAIL,
            payload: error.reponse && error.reponse.data.message ? error.reponse.data.message: error.message
        })
    }

   

}