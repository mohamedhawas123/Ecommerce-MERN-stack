import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utilty'


const initalState= {
    
    loading: false,
    userInfo : null,
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
        userInfo: action.payload
    })

}

const authFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}


const Reducer = (state =initalState, action ) => {
    switch(action.type) {
        case actionTypes.USER_LOGIN_START: return authStart(staet, action)
        case actionTypes.USER_LOGIN_SUCESS: return authSucess(staet, action)
        case actionTypes.USER_LOGIN_FAIL: return authFail(staet, action)
        
    }
}