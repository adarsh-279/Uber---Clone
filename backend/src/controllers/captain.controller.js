import captainModel from "../models/captain.model.js";
import captainServices from "../services/captain.services.js";
import { validationResult } from "express-validator";

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
}