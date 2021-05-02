import React from 'react'
import * as actionTypes from './actionTypes'
import axios from 'axios'


const fetchStart = () => {
    return {
        type: actionTypes.FETCH_START
    }
}

const fetchSucess = (products) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        products: products
    }
}




const fetchFail = err => {
    return {
        type : actionTypes.FETCH_FAIL,
        err: err
    }
}

export const productList = () => {
    return dispatch => {

        dispatch(fetchStart())
        axios.get('/api/products')
        .then(res => {
        dispatch(fetchSucess(res.data))
    })
        .catch(err => {
        dispatch(fetchFail(err))
        
    })
    }
    

}


const fetchDetailStart = () => {
    return {
        type:actionTypes.FETCH_DETAIL_START
    }
}


const fetchDetailSucess = (product) => {
    return {
        type: actionTypes.FETCH_DETAIL_SUCCESS,
        product: product
    }
}


const fetchDetailFail = (error) => {
    return {
        type:actionTypes.FETCH_DETAIL_FAIL,
        error: error
    }
}



export const productDetail = (id) => {
    return dispatch => {

        dispatch(fetchDetailStart())
        axios.get(`/api/products/${id}`)
        .then(res => {
        dispatch(fetchDetailSucess(res.data))
    })
        .catch(err => {
        dispatch(fetchDetailFail(err))
        
    })
    }
    

}


export const deleteProduct = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: actionTypes.PRODUCT_DELETE_REQUEST
        })

        const config = {
            headers: {
            
                Authorization: `Bearer ${getState().user.userInfo.token}`
            },
        }

        await axios.delete(`/api/products/${id}`, config)

        dispatch({
            type: actionTypes.PRODUCT_DELETE_SUCCESS
            
        })

    }catch(error) {
        dispatch({
            type:actionTypes.PRODUCT_DELETE_FAIL,
            payload:error
        })
        console.log(error)
    }
}


export const createProduct = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: actionTypes.PRODUCT_CREATE_REQUEST
        })

        const config = {
            headers: {
            
                Authorization: `Bearer ${getState().user.userInfo.token}`
            },
        }

        const {data} = await axios.post(`/api/products`, {} ,config)

        dispatch({
            type: actionTypes.PRODUCT_CREATE_SUCCESS,
            payload: data
            
        })

    }catch(error) {
        dispatch({
            type:actionTypes.PRODUCT_CREATE_FAIL,
            payload:error
        })
        console.log(error)
    }
}



export const updateProduct = (product) => async(dispatch, getState) => {
    try {
        dispatch({
            type: actionTypes.PRODUCT_UPDATE_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getState().user.userInfo.token}`
            },
        }

        const {data} = await axios.put(`/api/products/${product._id}`, product ,config)

        dispatch({
            type: actionTypes.PRODUCT_UPDATE_SUCCESS,
            payload: data
            
        })

    }catch(error) {
        dispatch({
            type:actionTypes.PRODUCT_UPDATE_FAIL,
            payload:error
        })
        console.log(error)
    }
}



export const createproductReview = (productId, review) => async(dispatch, getState) => {
    try {
        dispatch({
            type: actionTypes.PRODUCT_UPDATE_REVIEW_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getState().user.userInfo.token}`
            },
        }

        const {data} = await axios.post(`/api/products/${productId}/reviews`, review ,config)

        dispatch({
            type: actionTypes.PRODUCT_UPDATE_REVIEW_SUCCESS,
            payload: data
            
        })

    }catch(error) {
        dispatch({
            type:actionTypes.PRODUCT_UPDATE_REVIEW_FAIL,
            payload:error
        })
        console.log(error)
    }
}
