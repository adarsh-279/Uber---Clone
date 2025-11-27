import captainModel from "../models/captain.model.js";

export default {
    createCaptain: async ({ firstName, lastName, email, password, color, plate, vehicleType, capacity }) => {
        if (!firstName || !email || !password || !color || !plate || !vehicleType || !capacity) {
            throw new Error('All fields are required')
        }

        const existCaptain = await captainModel.findOne({ email })
        if (existCaptain) {
            throw new Error("Captain already exists");
        }

        const captain = captainModel.create({
            fullname: {
                firstName,
                lastName
            },
            email,
            password: await captainModel.hashPassword(password),
            vehicle: {
                color,
                plate,
                capacity,
                vehicleType
            },
        })

        return captain
    }
}