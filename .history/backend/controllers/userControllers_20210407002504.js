import asyncHandler from 'express-async-handler'
import express from 'express'
import User from '../models/userModel.js'
import generateToken from '../utilits/token.js'



const authUser = asyncHandler(async (req, res) => {

    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password)) ) {
        res.json({
            _id: user._id,
            name: user.name,
            email:user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id) 
        })
    } else {
        res.status(401)
        throw new Error("InValid email or Password")
    }

})


const registerUser = asyncHandler(async (req, res) => {

    const {name, email, password} = req.body

    const userExist = await User.findOne({email})

    if (userExist) {
        res.status(400)
        throw new Error("User already Exist")
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id) 
        })
    }else {
        res.status(400)
        throw new Error("something went wrong")
    }

})



const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)
    
    if (user) {

        res.json({
            _id: user._id,
            name: user.name,
            email:user.email,
            isAdmin: user.isAdmin
        })
        
    }else {
        res.status(404)
        throw new Error("USer Not Found")
    }

})



const updateUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)
    
    if (user) {

        user.name = req.body.name || user.name
        user.email = req.body.email || user.email 
        if(req.body.password) {
            user.password = req.body.password
        }

        const updatdUser = await user.save()

        res.status(201).json({
            _id: updatdUser._id,
            name: updatdUser.name,
            email:updatdUser.email,
            isAdmin: updatdUser.isAdmin,
            token: generateToken(updatdUser._id) 
        })
        
    }else {
        res.status(404)
        throw new Error("USer Not Found")
    }

})


export {
    authUser,
    getUserProfile,
    registerUser,
    updateUserProfile
}
 