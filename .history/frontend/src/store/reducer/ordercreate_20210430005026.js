import React from 'react'
import {updateObject} from '../utilty'
import * as actionTypes from '../actions/actionTypes'



const initialState = {

    loading: true,
    success: false,
    order: null,
    orderItems: [],
    shippingAddress: {},
    error: null,
    orders: []
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
        success: false, 
        error: action.error
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
        success: true
        
    })
}


const payOrderFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}



const orderListStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}



const orderListSucess = (state, action) => {
    return updateObject(state, {
        loading: false,
        orders: action.payload
        
    })
}


const orderListFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
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
        case actionTypes.ORDER_GET_REST: return {user:{}}

        case actionTypes.ORDER_PAY_START: return payOrderStart(state, action)
        case actionTypes.ORDER_PAY_SUCCESS: return payOrderSucess(state, action)
        case actionTypes.ORDER_PAY_FAIL: return payOrderFail(state, action)
        case actionTypes.ORDER_PAY_REST: 
        return {}

        case actionTypes.ORDER_LIST_START: return orderListStart(state, action)
        case actionTypes.ORDER_LIST_SUCCESS: return orderListSucess(state, action)
        case actionTypes.ORDER_LIST_FAIL: return orderListFail(state, action)
        case actionTypes.ORDER_LIST_REST: return {orders: []}

        case actionTypes.ORDER_GET_ADMIN_START: return {loading: true}
        case actionTypes.ORDER_GET_ADMIN_SUCCESS: return {loading: false, orders: action.payload}
        case actionTypes.ORDER_GET_ADMIN_FAIL: return {loading: false, error: action.payload}
        case actionTypes.ORDER_GET_ADMIN_REST: return {orders: []}

        default:
            return state

        
    }
}

export default reducer