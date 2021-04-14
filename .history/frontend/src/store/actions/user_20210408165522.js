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


export const UserDetail = (id) =>  async (dispatch, getState) => {
    
    try {
        dispatch({
            type: actionTypes.USER_PROFILE_START
        })
    
        const {userLogin: {userInfo}} = getState()
    
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getState().user.userInfo.token}`
            },
        }
    
        const {data} = await axios.get(
            `api/users/${id}`,
            config
        )
    
        dispatch({
            type:actionTypes.USER_PROFILE_SUCESS,
            payload: data
        })
    
    } catch (error) {
        dispatch({
            type: actionTypes.USER_PROFILE_FAIL,
            payload: error
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

export const  logout = () => (dispatch) => {

    localStorage.removeItem("userInfo")

    dispatch ({
        type: actionTypes.USER_LOGOUT
    })
}