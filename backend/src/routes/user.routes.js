import express from 'express'
import { body } from 'express-validator'
import userController from '../controllers/user.controller.js'

const userRoute = express.Router()

userRoute.post('/register', [
    body('email').isEmail().withMessage('Inavlid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),
    body('fullname.firstName').isLength({ min: 3}).withMessage('First name must be atleast 3 characters long')
], userController.registerUser)

export default userRoute