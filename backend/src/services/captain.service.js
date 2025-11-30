import captainModel from "../models/captain.model.js";

export default {
    createCaptain: async ({ fullname, email, password, vehicle }) => {
        // basic validation for required pieces
        if (!fullname || !fullname.firstName || !email || !password || !vehicle) {
            const err = new Error('All fields are required')
            err.statusCode = 400
            throw err
        }

        if (!vehicle.color || !vehicle.plate || !vehicle.vehicleType || (vehicle.capacity === undefined || vehicle.capacity === null)) {
            const err = new Error('Vehicle details are incomplete')
            err.statusCode = 400
            throw err
        }

        // check duplicate email
        const existCaptain = await captainModel.findOne({ email })
        if (existCaptain) {
            const err = new Error('Captain already exists')
            err.statusCode = 400
            throw err
        }

        // check duplicate vehicle plate
        const existPlate = await captainModel.findOne({ 'vehicle.plate': vehicle.plate })
        if (existPlate) {
            const err = new Error('Vehicle plate already registered')
            err.statusCode = 400
            throw err
        }

        const hashed = await captainModel.hashPassword(password)

        const captain = await captainModel.create({
            fullname: {
                firstName: fullname.firstName,
                lastName: fullname.lastName || ""
            },
            email,
            password: hashed,
            vehicle: {
                color: vehicle.color,
                plate: vehicle.plate,
                capacity: vehicle.capacity,
                vehicleType: vehicle.vehicleType,
            },
        })

        return captain
    }
}