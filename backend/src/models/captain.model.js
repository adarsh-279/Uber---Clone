import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const captainSchema = new mongoose.Schema({
    fullname: {
        firstName: {
            type: String,
            required: true,
            minlength: [ 3, "First name should be atleast 3 characters long"]
        },
        lastName: {
            type: String,
            default: "",
            minlength: [ 3, "Last name should be atleast 3 characters long"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
        minlength: [ 5, "Email should be atleast 5 characters long"]
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['available', 'unavailable'],
        default: 'unavailable'
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    rideCount: {
        type: Number,
        default: 0
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [ 3, "Vehicle color should be atleast 3 characters long"]
        },
        plate: {
            type: String,
            required: true,
            unique: true,
            minlength: [ 9, "Vehicle number should be atleast 9 characters long"]
        },
        capacity: {
            type: Number,
            required: true,
            min: [ 1, "Vehicle capacity should be atleast 1"]
        },
        vehicleType: {
            type: String,
            required: true,
        },
    },
    location: {
        latitude: {
            type: Number,
            default: 0
        },
        longitude: {
            type: Number,
            default: 0
        }
    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h'})
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}

const captainModel = mongoose.model('captain', captainSchema)

export default captainModel