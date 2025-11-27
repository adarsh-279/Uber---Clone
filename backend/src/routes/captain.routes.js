import express from 'express'
import captainController from '../controllers/captain.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js';
import { body } from "express-validator";

const captainRoute = express.Router()

captainRoute.post('/register', [
    body('email').isEmail().withMessage('Inavlid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),
    body('fullname.firstName').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Vehicle color must be atleast 3 characters long'),
    body('vehicle.plate').isLength({ min: 9 }).withMessage('Vehicle number must be atleast 9 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Vehicle capacity must be atleast 1'),
    body('vehicle.vehicleType').notEmpty().withMessage('Vehicle type is required'),
], captainController.registerCaptain)

captainRoute.post('/login', [
    body('email').isEmail().withMessage('Inavlid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),
], captainController.loginCaptain)

captainRoute.get("/logout", authMiddleware.authCaptain, captainController.logoutCaptain);

captainRoute.get("/profile", authMiddleware.authCaptain, captainController.getCaptainProfile);

export default captainRoute