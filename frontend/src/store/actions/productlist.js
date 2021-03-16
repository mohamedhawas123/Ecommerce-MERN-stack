import React from 'react'
import * as actionTypes from './actionTypes'
import axios from 'axios'


const fetchStart = () => {
    return {
        type: actionTypes.FETCH_START
    }
}

const fetchSucess = (products) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        products: products
    }
}

const fetchFail = err => {
    return {
        type : actionTypes.FETCH_FAIL,
        err: err
    }
}

export const productList = () => {
    return dispatch => {

        dispatch(fetchStart())
        axios.get('/api/products')
        .then(res => {
        dispatch(fetchSucess(res.data))
    })
        .catch(err => {
        dispatch(fetchFail(err))
        
    })
    }
    

}