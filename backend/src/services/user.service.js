import userModel from "../models/user.model.js"

export default {
    createUser: async ({ firstName, lastName, email, password }) => {
        if (!firstName || !email || !password) {
            throw new Error('All fields are required')
        }

        const existUser = await userModel.findOne({ email })
        if (existUser) {
            throw new Error("User already exists");
        }

        const user = userModel.create({
            fullname: {
                firstName,
                lastName
            },
            email,
            password: await userModel.hashPassword(password)
        })

        return user
    }
}