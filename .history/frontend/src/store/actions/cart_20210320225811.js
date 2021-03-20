import React, {getState} from 'react'
import * as actionTypes from './actionTypes'
import axios from 'axios'



const adCart = (item ) => {
    return {
        type: actionTypes.CART_ADD_ITEM,
        item: item,
        

    }
}


export const addToCart =  (id)  => {
    return dispatch => {    
        axios.get(`/api/products/${id}`)
        .then(res => {
            dispatch(adCart(res.data))
        })
        
    }
    localStorage.setItem("cartItems", "yo")
}




 
