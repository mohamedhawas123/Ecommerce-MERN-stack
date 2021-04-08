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

const profilestart = () => {
    return {
        type: actionTypes.USER_PROFILE_START
    }
    
}

const profileSucess = (payload) => {

    return {
        type : actionTypes.USER_PROFILE_SUCESS,
        payload: payload
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


export const UserDetail = (id) =>  async (getState) => {
    
    return dispatch => {
        console.log(dispat)
        dispatch(profilestart)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getState().user.userInfo.token}`
            },
        }
        axios.get(
            `api/users/${id}`,
            config
        )
        .then(res => {
            console.log(res.data)
            dispatch(profileSucess(res.data))
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