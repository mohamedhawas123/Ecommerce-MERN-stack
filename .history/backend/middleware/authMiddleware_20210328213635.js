import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async( req, res, next ) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startWith('Bearer') )  {
        console.log("Token Found")
    }

    if(!token) {
        res.status(401)
        throw new Error("Not Authorized, no token")
    }


    next()
})

export default protect