import userModel from "../models/user.model.js";
import userService from "../services/user.service.js";
import { validationResult } from "express-validator";
import blacklistTokenModel from "../models/blacklistToken.model.js";

export default {
    registerUser: async (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }

        const { fullname, email, password } = req.body

        const user = await userService.createUser({
            firstName: fullname.firstName,
            lastName: fullname.lastName,
            email,
            password
        })

        const token = user.generateAuthToken()
        res.status(201).json({user, token})
    },

    loginUser: async (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }

        const { email, password } = req.body

        const user = await userModel.findOne({ email }).select("+password")
        if (!user) {
            return res.status(401).json({message: "Invalid email or password"})
        }

        const isPasswordValid = await user.comparePassword(password)
        if (!isPasswordValid) {
            return res.status(401).json({message: "Invalid email or password"})
        }

        const token = user.generateAuthToken();
        res.cookie('token', token)
        res.status(200).json({ user, token });
    },

    logoutUser: async (req, res, next) => {
        res.clearCookie('token')

        const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

        await blacklistTokenModel.create({ token })
        
        res.status(200).json({ message: "Logged out successfully"})
    },

    getUserProfile: async (req, res, next) => {
        res.status(200).json({message: req.user})
    }
}