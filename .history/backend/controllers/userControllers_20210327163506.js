import asyncHandler from 'express-async-handler'
import express from 'express'




const authUser = asyncHandler(async (req, res) => {

    const {email, password} = req.body

    res.send({
        email, 
        password
    })

})

export {
    authUser
}
 