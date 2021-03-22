import React, {getState} from 'react'
import * as actionTypes from './actionTypes'
import axios from 'axios'





export const addToCart =  (id, qty) => async (dispatch, getState) =>  {
    
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type:actionTypes.CART_ADD_ITEM,
        item: {
            data,
           
            qty
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
    
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