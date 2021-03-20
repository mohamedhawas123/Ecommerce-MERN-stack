import React, {getState} from 'react'
import * as actionTypes from './actionTypes'
import axios from 'axios'



const adCart = (item, qty) => {
    return {
        type: actionTypes.CART_ADD_ITEM,
        item: item,
        qty

    }
}


export const addToCart =  (id, qty)  => {
    return dispatch => {
        const  {data} =   axios.get(`/api/products/${id}`)
        dispatch(adCart(data, qty))
        
    }
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}




 
