import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utilty'


const cartItemsFromStorage = localStorage.getItem("cartItems")  ? JSON.parse(localStorage.getItem("cartItems")): [] 
console.log(localStorage)

const initalState = {
    cartItems : [],
    cart: {cartItems: cartItemsFromStorage}
}


const addToCart = (state, action) => {
    const item = action.item
    console.log(action)
    const existItem = state.cartItems.find(x => x.product === item._id)
    
    if(existItem) {
        return {
            ...state,
            cartItems: state.cartItems.map(e => e.product === existItem._id ? item: e)
        }

    }else {
        return {
            ...state,
            cartItems:[...state.cartItems, item]
        }
    }
}


const reducer = (state=initalState, action) => {
    switch(action.type) {
        case actionTypes.CART_ADD_ITEM: return addToCart(state, action)
        default:
            return state
    }
}

export default reducer