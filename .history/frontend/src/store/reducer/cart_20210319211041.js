import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utilty'



const initalState = {
    cartItems : []
}


const addToCart = (state, action) => {
    const item = action.item
    const existItem = state.cartItems.find(x => x.product === item.product)
}


const reducer = (state=initalState, action) => {
    switch(action.type) {
        case actionTypes.CART_ADD_ITEM: return addToCart(state, action)
    }
}

export default reducer