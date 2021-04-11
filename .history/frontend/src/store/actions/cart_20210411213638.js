import React, {getState} from 'react'
import * as actionTypes from './actionTypes'
import axios from 'axios'





export const addToCart =  (id, qty) => async (dispatch, getState) =>  {
    
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type:actionTypes.CART_ADD_ITEM,
        item: {
            product:data._id,
            name : data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
    
}


export const removeFromCart = (id) => (dispatch, getState) => {
    
    dispatch({
        type: actionTypes.CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.removeItem("cartItems", JSON.stringify(getState().cart.cartItems))
}



export const saveShippingAddress = (data) => (dispatch) => {
    
    dispatch({
        type: actionTypes.CART_SAVE_SHAPPING_ADDRESS,
        payload: data
    })

    localStorage.setItem("shippingAddress", JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    
    dispatch({
        type: actionTypes.CART_SAVE_PAYMENT_METHOD,
        payload: data
    })

    localStorage.setItem("PaymentMethod", JSON.stringify(data))
}



 
// const adCart = (item ) => {
//     return {
//         type: actionTypes.CART_ADD_ITEM,
//         item: item,
        

//     }
// }



// return dispatch => {    
//     axios.get(`/api/products/${id}`)
//     .then(res => {
//         dispatch(adCart(res.data))
//     })
    
// }