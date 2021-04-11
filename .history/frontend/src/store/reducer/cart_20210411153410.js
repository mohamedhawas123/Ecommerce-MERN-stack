import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utilty'


const cartItemsFromStorage = localStorage.getItem("cartItems")  ? JSON.parse(localStorage.getItem("cartItems")): [] 
console.log(localStorage)


const shippingAddressFromStorage = localStorage.getItem("shippingAddress")  ? JSON.parse(localStorage.getItem("shippingAddress")): {} 
console.log(localStorage)

const initalState = {
    cartItems : [],
    shippingAddress: {
        address: "",
        city: "",
        postelCode: "",
        country: ""
    },
    cart: {cartItems: cartItemsFromStorage, shippingAddress:shippingAddressFromStorage },

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


const removeFromCart = (state,action) => {
    return {
        ...state, 
        cartItems: state.cartItems.filter(e => e.product !== action.payload)
    }
}


const saveShippingAddress = (state,action) => {
    return {
        ...state, 
        shippingAddress: action.payload
    }
}






const reducer = (state=initalState, action) => {
    switch(action.type) {
        case actionTypes.CART_ADD_ITEM: return addToCart(state, action)
        case actionTypes.CART_REMOVE_ITEM: return removeFromCart(state, action)
        case actionTypes.CART_SAVE_SHAPPING_ADDRESS: return saveShippingAddress(state, action)
        default:
            return state
    }
}

export default reducer