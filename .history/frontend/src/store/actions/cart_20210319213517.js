import React from 'react'
import * as actionTypes from './actions/actionTypes'
import axios from 'axios'



const addToCart = (item) => {
    return {
        type: actionTypes.CART_ADD_ITEM,
        item: item

    }
}




