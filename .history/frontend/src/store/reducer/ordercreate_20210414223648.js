import React from 'react'
import {updateObject} from '../utilty'
import * as actionTypes from '../actions/actionTypes'



const initialState = {

    loading: true,
    success: false,
    order: null,
    orderItems: [],
    shippingAddress: {},
    error: null
}


const createOrderStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}



const createOrderSucess = (state, action) => {
    return updateObject(state, {
        loading: false,
        order: action.payload,
        success: true
    })
}


const createOrderFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        success: false
    })
}



const getOrderStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}



const getOrderSucess = (state, action) => {
    return updateObject(state, {
        loading: false,
        order: action.payload,
        
    })
}


const getOrderFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        success: false
    })
}



const payOrderStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}



const payOrderSucess = (state, action) => {
    return updateObject(state, {
        loading: false,
        order: action.payload,
        
    })
}


const payOrderFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        success: false
    })
}







const  reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.ORDER_CREATE_START: return createOrderStart(state, action)
        case actionTypes.ORDER_CREATE_SUCCESS: return createOrderSucess(state, action)
        case actionTypes.ORDER_CREATE_FAIL: return createOrderFail(state, action)
        
        case actionTypes.ORDER_GET_START: return getOrderStart(state, action)
        case actionTypes.ORDER_GET_SUCCESS: return getOrderSucess(state, action)
        case actionTypes.ORDER_GET_FAIL: return getOrderFail(state, action)
        

        default:
            return state

        
    }
}

export default reducer