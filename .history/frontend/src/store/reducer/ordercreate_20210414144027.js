import React from 'react'
import {updateObject} from '../utilty'
import * as actionTypes from '../actions/actionTypes'



const initialState = {

    loading: false,
    success: false,
    order: {}
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



const  reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.ORDER_CREATE_START: return createOrderStart(state, action)
        case actionTypes.ORDER_CREATE_SUCCESS: return createOrderSucess(state, action)
        case actionTypes.ORDER_CREATE_FAIL: return createOrderFail(state, action)
        
        default:
            return state

        
    }
}

export default reducer