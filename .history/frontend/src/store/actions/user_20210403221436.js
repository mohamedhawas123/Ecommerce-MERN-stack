import * as actionTypes from './actionTypes'
import axios from 'axios'


const authStart = () => {
    return {
        type: actionTypes.USER_LOGIN_START
    }
}

const authSucess = (token) => {
    return {
        type: actionTypes.USER_LOGIN_SUCESS,
        token: token
    }
}


const authFail = (error) => {
    return {
        type: actionTypes.USER_LOGIN_FAIL,
        error: error
    }
}


export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart)
        axios.post(`/api/users/login`, {
            email: email,
            password: password
        },{
            headers:{'Content-Type': 'application/json'}
        })
        .then(res => {
            const token = res.data.token
            localStorage.setItem("userInfo", JSON.stringify(res.data))
            dispatch(authSucess(res.data))
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}



export const authSignup = (name, email, password) => {
    return dispatch => {
        dispatch(authStart)
        axios.post(`/api/users`, {
            name: name,
            email: email,
            password: password
        },{
            headers:{'Content-Type': 'application/json'}
        })
        .then(res => {
            const token = res.data.token
            localStorage.setItem("userInfo", JSON.stringify(res.data))
            dispatch(authSucess(token))
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}