import React from 'react'
import * as actionTypes from './actions/actionTypes'
import axios from 'axios'



const adCart = (item) => {
    return {
        type: actionTypes.CART_ADD_ITEM,
        item: item

    }
}


const addToCart = async (id) => {
    return dispatch => {
        const  {data} = await axios.get(`/api/products/${id}`)
        dispatch(adCart(data))
        
    }
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}


 
