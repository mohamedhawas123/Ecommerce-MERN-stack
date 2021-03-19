import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utilty'



const initalState = {
    cartItems : []
}


const addToCart = (state, action) => {
    const item = action.item
    const existItem = state.cartItems.find(x => x.product === item.product)
    
    if(existItem) {
        return {
            ...state,
            cartItems: state.cartItems.map(e => e.product === existItem.product ? item: x)
        }

    }else {
        return {
            ...state,
            cartItems:[...state.cartItems. item]
        }
    }
}


const reducer = (state=initalState, action) => {
    switch(action.type) {
        case actionTypes.CART_ADD_ITEM: return addToCart(state, action)
    }
}

export default reducer