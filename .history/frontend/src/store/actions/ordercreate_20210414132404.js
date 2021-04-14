import React from 'react'
import * as actionTypes from '../actions/actionTypes'


export const createOrder = (order) => (dispatch, getState) => {


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

}