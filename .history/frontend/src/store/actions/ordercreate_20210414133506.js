import axios from 'axios'
import React from 'react'
import * as actionTypes from '../actions/actionTypes'


export const createOrder = (order) => (dispatch, getState) => {

    try {
        dispatch({
            type: actionTypes.ORDER_CREATE_START
        })
    
        const {userLogin: {userInfo}} = getState()
    
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorication : `Bearer ${userInfo.token}`
            }
        }
    
        const {data} = await axios.get('/api/orders', order, config)
    
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