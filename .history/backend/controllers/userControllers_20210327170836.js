import asyncHandler from 'express-async-handler'
import express from 'express'
import User from '../models/userModel.js'



const authUser = asyncHandler(async (req, res) => {

    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password)) ) {
        res.json({
            _id: user._id,
            name: user_name,
            email:user.email,
            isAdmin: user.isAdmin,
            token: null 
        })
    } else {
        res.status(401)
        throw new Error("InValid email or Password")
    }

})

export {
    authUser
}
 