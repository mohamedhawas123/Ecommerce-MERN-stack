import React from 'react'
import * as actionTypes from './actionTypes'
import axios from 'axios'



const adCart = (item ) => {
    return {
        type: actionTypes.CART_ADD_ITEM,
        item: item,
        

    }
}


export const addToCart =  (id) => async (getState)   => {
    return dispatch => {
        axios.get(`/api/products/${id}`)
        .then(res => {
            dispatch(adCart(res.data))
        })
        
    }
    console.log(getState().cartItems)
    localStorage.setItem("cartItems", JSON.stringify(getState().cartItems))
}




 
