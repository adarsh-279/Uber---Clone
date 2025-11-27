import captainModel from "../models/captain.model.js";
import captainServices from "../services/captain.services.js";
import { validationResult } from "express-validator";
import blacklistTokenModel from "../models/blacklistToken.model.js";

export default {
    registerCaptain: async (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }

        const { fullname, email, password, vehicle } = req.body
        
        const existCaptain = await captainModel.findOne({ email })
        if (existCaptain) {
            res.status(400).json({message: "Captain already exists"});
        }

        const captain = await captainServices.createCaptain({
            firstName: fullname.firstName,
            lastName: fullname.lastName,
            email,
            password,
            color: vehicle.color,
            plate: vehicle.plate,
            vehicleType: vehicle.vehicleType,
            capacity: vehicle.capacity
        })

        const token = captain.generateAuthToken();
        res.status(201).json({ captain, token });
    },

    loginCaptain: async (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }

        const { email, password } = req.body

        const captain = await captainModel.findOne({ email }).select("+password")
        if (!captain) {
            return res.status(401).json({message: "Invalid email or password"})
        }

        const isPasswordValid = await captain.comparePassword(password)
        if (!isPasswordValid) {
            return res.status(401).json({message: "Invalid email or password"})
        }

        const token = captain.generateAuthToken();
        res.cookie('token', token)
        res.status(200).json({ captain, token });
    },

    logoutCaptain: async (req, res, next) => {
        res.clearCookie('token')

        const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

        await blacklistTokenModel.create({ token })
        
        res.status(200).json({ message: "Logged out successfully"})
    }
}