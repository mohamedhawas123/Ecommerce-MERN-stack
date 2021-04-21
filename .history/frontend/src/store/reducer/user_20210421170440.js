import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utilty'


const userInfoFromStorage = localStorage.getItem("userInfo") 
? JSON.parse(localStorage.getItem("userInfo")): null

console.log(userInfoFromStorage)

const initalState= {
    
    loading: true,
    userInfo : null,
    userLogin: {userInfo: userInfoFromStorage},
    userDetail: null,
    error: null,
    success: false,
    users: []
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

const userListStart = () => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}


const userListSucess = () => {
    return updateObject(state, {
        loading: false,
        error: null
    })
}


const userListStart = () => {
    return updateObject(state, {
        loading: false,
        error: null
    })
}


const reducer = (state =initalState, action ) => {
    switch(action.type) {
        case actionTypes.USER_LOGIN_START: return authStart(state, action)
        case actionTypes.USER_LOGIN_SUCESS: return authSucess(state, action)
        case actionTypes.USER_LOGIN_FAIL: return authFail(state, action)

        case actionTypes.USER_PROFILE_START: return {...state, loading: true}
        case actionTypes.USER_PROFILE_SUCESS: return {...state, loading: false, userDetail:action.payload }
        case actionTypes.USER_PROFILE_FAIL: return {...state, loading: false, error: action.error}

        case actionTypes.USER_PROFILE_UPDATE_START: return {loading: true}
        case actionTypes.USER_PROFILE_UPDATE_SUCESS: return {loading: false, success: true ,userInfo:action.payload }
        case actionTypes.USER_PROFILE_UPDATE_FAIL : return {loading: false, error: action.error}

        default:
            return state
        
    }
}

export default reducer


