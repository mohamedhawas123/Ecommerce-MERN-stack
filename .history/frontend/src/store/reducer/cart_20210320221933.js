import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utilty'


const cartItemsFromStorage = localStorage.getItem("cartItems")  ? JSON.parse(localStorage.getItem("cartItems")): [] 


const initalState = {
    cartItems : [],
    cart: {cartItems: cartItemsFromStorage}
}


const addToCart = (state, action) => {
    const item = action.item
    print(item)
    const existItem = state.cartItems.find(x => x.product === item.product)
    
    if(existItem) {
        return {
            ...state,
            cartItems: state.cartItems.map(e => e.product === existItem.product ? item: e)
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