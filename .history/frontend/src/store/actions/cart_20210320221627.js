import React, {getState} from 'react'
import * as actionTypes from './actionTypes'
import axios from 'axios'



const adCart = (item, ) => {
    return {
        type: actionTypes.CART_ADD_ITEM,
        item: item,
        

    }
}


export const addToCart =  (id)  => {
    return dispatch => {
        const  {data} =   axios.get(`/api/products/${id}`)
        dispatch(adCart(data._id))
        
    }
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}




 
