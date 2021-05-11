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


const updateProfile = (payload) => {
    return {
        type: actionTypes.USER_PROFILE_UPDATE_SUCESS,
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


export const UserDetail = (id) =>  async (dispatch, getState) => {
    
    try {
        dispatch({
            type: actionTypes.USER_PROFILE_START
        })
    
        
    
        const config = {
            headers: {
                
                Authorization: `Bearer ${getState().user.userInfo.token}`
            },
        }
    
        const {data} = await axios.get(`/api/users/${id}`, config)

        console.log(data)
    
        dispatch({
            type:actionTypes.USER_PROFILE_SUCESS,
            payload: data
        })
    
    } catch (error) {
        dispatch({
            type: actionTypes.USER_PROFILE_FAIL,
            error: error
        })

        console.log(error)

    }
    

}



export const updateUserProfile = (name, email, tokenn) => {
    
    return dispatch => {
        dispatch(authStart())
        const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${tokenn}`
                    },
                }
       axios.put(`api/users/profile`, {
            name:name,
            email:email
        }, config)
        .then(res => {
            console.log(res.data)
            dispatch(updateProfile(res.data))
        })
        .catch(err => {
            console.log(err)
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

    dispatch ({type: actionTypes.USER_LOGOUT})
    dispatch ({type: actionTypes.ORDER_GET_REST})
    dispatch ({type: actionTypes.ORDER_LIST_REST})
    dispatch ({type: actionTypes.USER_LIST_REST})
}




export const listUser = () =>  async (dispatch, getState) => {
    
    try {
        dispatch({
            type: actionTypes.USER_LIST_REQUEST
        })
    
        
    
        const config = {
            headers: {
            
                Authorization: `Bearer ${getState().user.userInfo.token}`
            },
        }
    
        const {data} = await axios.get(
            '/api/users',
            config
        )

        console.log(data)
    
        dispatch({
            type:actionTypes.USER_SUCESS_REQUEST,
            payload: data
        })
    
    } catch (error) {
        dispatch({
            type: actionTypes.USER_FAIL_REQUEST,
            error: error
        })

        console.log(error)

    }
    

}


export const deleteUser = (id) =>  async (dispatch, getState) => {
    
    try {
        dispatch({
            type: actionTypes.USER_DELETE_REQUEST
        })
    
        
    
        const config = {
            headers: {
            
                Authorization: `Bearer ${getState().user.userInfo.token}`
            },
        }
    
        const {data} = await axios.delete(
            `/api/users/${id}`,
            config
        )

        console.log(data)
    
         dispatch({
            type:actionTypes.USER_DELETE_SUCCESS,
            payload: data
        })
    
    } catch (error) {
        dispatch({
            type: actionTypes.USER_DELETE_FAIL,
            error: error
        })

        console.log(error)

    }
    

}



export const updateUser = (user) =>  async (dispatch, getState) => {
    
    try {
        dispatch({
            type: actionTypes.USER_UPDATE_START
        })
    
        
    
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getState().user.userLogin.userInfo.token}`
            },
        }
    
        const {data} = await axios.put(
            `/api/users/${user._id}`, user, 
            config
        )

        console.log(data)
    
         dispatch({
            type:actionTypes.USER_UPDATE_SUCCESS,
            payload: data
        })
    
    } catch (error) {
        dispatch({
            type: actionTypes.USER_UPDATE_FAIL,
            error: error
        })

        console.log(error)

    }
    

}




// try {
    //     dispatch({
    //         type: actionTypes.USER_PROFILE_UPDATE_START 
    //     })
    
       
    //     const config = {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${getState().user.userLogin.userInfo.token}`
    //         },
    //     }
    
    //     const {data} = await axios.put(
    //         `api/users/profile`, user, config)

    //     console.log(data)
    
    //     dispatch({
    //         type:actionTypes.USER_PROFILE_UPDATE_SUCESS,
    //         payload: data
    //     })
    
    // } catch (error) {
    //     dispatch({
    //         type: actionTypes.USER_PROFILE_UPDATE_FAIL,
    //         error: error
    //     })

    //     console.log(error)

    // }
    