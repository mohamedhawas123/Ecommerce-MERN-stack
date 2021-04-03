import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utilty'


const userInfoFromStorage = localStorage.getItem("userInfo") 
? JSON.parse(localStorage.getItem("userInfo")): null

const initalState= {
    
    loading: false,
    userInfo : null,
    userLogin: {userInfo: userInfoFromStorage},
    error: null
}



const authStart = (state,action) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const authSucess= (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        userInfo: action.token
    })

}

const authFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}


const reducer = (state =initalState, action ) => {
    switch(action.type) {
        case actionTypes.USER_LOGIN_START: return authStart(state, action)
        case actionTypes.USER_LOGIN_SUCESS: return authSucess(state, action)
        case actionTypes.USER_LOGIN_FAIL: return authFail(state, action)
        default:
            return state
        
    }
}

export default reducer