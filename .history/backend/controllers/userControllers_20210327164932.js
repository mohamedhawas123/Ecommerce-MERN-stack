import asyncHandler from 'express-async-handler'
import express from 'express'




const authUser = asyncHandler(async (req, res) => {

    const {email, password} = req.body

    const user = await User.findOne({email: email})

})

export {
    authUser
}
 