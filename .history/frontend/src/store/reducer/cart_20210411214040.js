import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utilty'


const cartItemsFromStorage = localStorage.getItem("cartItems")  ? JSON.parse(localStorage.getItem("cartItems")): [] 
console.log(localStorage)


const shippingAddressFromStorage = localStorage.getItem("shippingAddress")  ? JSON.parse(localStorage.getItem("shippingAddress")): {} 


const PaymenthMethodFromStorage = localStorage.getItem("PaymentMethod")  ? JSON.parse(localStorage.getItem("PaymentMethod")): {} 



const initalState = {
    cartItems : [],
    shippingAddress: {},
    paymenthMethod: {},
    cart: {cartItems: cartItemsFromStorage, shippingAddress:shippingAddressFromStorage, paymenthMethod: PaymenthMethodFromStorage },

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

const savePaymentMethod = (state,action) => {
    return {
        ...state, 
        paymenthMethod: action.payload
    }
}




const reducer = (state=initalState, action) => {
    switch(action.type) {
        case actionTypes.CART_ADD_ITEM: return addToCart(state, action)
        case actionTypes.CART_REMOVE_ITEM: return removeFromCart(state, action)
        case actionTypes.CART_SAVE_SHAPPING_ADDRESS: return saveShippingAddress(state, action)
        case actionTypes.CART_SAVE_PAYMENT_METHOD: return savePaymentMethod(state, action)

        default:
            return state
    }
}

export default reducer


