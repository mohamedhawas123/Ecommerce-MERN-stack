import asyncHandler from 'express-async-handler'
import express from 'express'
import User from '../models/userModel.js'



const authUser = asyncHandler(async (req, res) => {

    const {email, password} = req.body

    const user = await User.findOne({email: email})

    if(user)

})

export {
    authUser
}
 