import React from 'react'
import {updateObject} from '../utilty'
import * as actionTypes from '../actions/actionTypes'


const initialState = {
    products : [],
    product: {},
    pages: null,
    page: null,
    error: null,
    loading: false,
    success: false
}


const fetchStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}



const fetchSucess = (state, action) => {
    return updateObject(state, {
        products: action.products.prodcuts,
        pages: action.products.pages,
        page:action.products.page,
        error: null,
        loading: false
    })
}


const fetchFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.err
    })
}


const fetchDetailStart= (state, action) => {
    return updateObject(state, {
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

const fetchDetailError= (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error

    })
}



const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_START: return fetchStart(state, action);
        case actionTypes.FETCH_SUCCESS: return fetchSucess(state, action)
        case actionTypes.FETCH_FAIL: return fetchFail(state, action)

        case actionTypes.FETCH_DETAIL_START: return fetchDetailStart(state, action)
        case actionTypes.FETCH_DETAIL_SUCCESS: return fetchDetailSucess(state, action)
        case actionTypes.FETCH_DETAIL_FAIL: return fetchDetailError(state, action)
        
        case actionTypes.PRODUCT_DELETE_REQUEST: return {loading: true} 
        case actionTypes.PRODUCT_DELETE_SUCCESS : return {loading: false, success: true}
        case actionTypes.PRODUCT_DELETE_FAIL: return {loading:false, error:action.payload}
        
        case actionTypes.PRODUCT_CREATE_REQUEST: return {loading: true} 
        case actionTypes.PRODUCT_CREATE_SUCCESS : return {loading: false, success: true ,product: action.payload}
        case actionTypes.PRODUCT_CREATE_FAIL: return {loading:false, error:action.payload}
        case actionTypes.PRODUCT_CREATE_REST: return {}

        case actionTypes.PRODUCT_UPDATE_REQUEST: return {loading: true} 
        case actionTypes.PRODUCT_UPDATE_SUCCESS : return {loading: false, success: true ,product: action.payload}
        case actionTypes.PRODUCT_UPDATE_FAIL: return {loading:false, error:action.payload}
        case actionTypes.PRODUCT_UPDATE_REST: return { product: {} }

        case actionTypes.PRODUCT_UPDATE_REVIEW_REQUEST: return {loading: true} 
        case actionTypes.PRODUCT_UPDATE_REVIEW_SUCCESS : return {loading: false, success: true }
        case actionTypes.PRODUCT_UPDATE_REVIEW_FAIL: return {loading:false, error:action.payload}
        case actionTypes.PRODUCT_UPDATE_REVIEW_REST: return { product: {} }


        case actionTypes.PRODUCT_TOP_REQUEST: return {loading: true, products :[]} 
        case actionTypes.PRODUCT_TOP_SUCCESS : return {loading: false, products: action.payload }
        case actionTypes.PRODUCT_TOP_FAIL: return {loading:false, error:action.payload}


        default:
            return state
    }
}

export default reducer