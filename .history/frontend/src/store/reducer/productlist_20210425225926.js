import React from 'react'
import {updateObject} from '../utilty'
import * as actionTypes from '../actions/actionTypes'


const initialState = {
    products : [],
    product: {},
    error: null,
    loading: false
}


const fetchStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}



const fetchSucess = (state, action) => {
    return updateObject(state, {
        products: action.products,
        error: null,
        loading: false
    })
}

const fetchDetailSucess = (state, action) => {
    return updateObject(state, {
        product: action.product,
        error:null,
        loading:false
    })
}

const fetchFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.err
    })
}



const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_START: return fetchStart(state, action);
        case actionTypes.FETCH_SUCCESS: return fetchSucess(state, action)
        case actionTypes.FETCH_FAIL: return fetchFail(state, action)
        case actionTypes.FETCH_DETAIL_SUCCESS: return fetchDetailSucess(state, action)
        
        case actionTypes.PRODUCT_DELETE_REQUEST: return 
        case actionTypes.PRODUCT_DELETE_SUCCESS : return 
        case actionTypes.PRODUCT_DELETE_FAIL: return 
        
        default:
            return state
    }
}

export default reducer