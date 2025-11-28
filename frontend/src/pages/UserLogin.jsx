import React, { useState } from 'react'
import { Link } from "react-router-dom";

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setuserData] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
        setuserData({
            email: email,
            password: password
        })
        setEmail('')
        setPassword('')
    }

    return (
        <div className='h-screen w-full pt-10 px-5 flex flex-col'>
            <img className='h-8 w-[20%] mb-10' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
            <form onSubmit={(e) => {
                submitHandler;
            }} className='w-full font-[Uber-Medium]'>
                <h1 className='text-2xl mb-3'>Enter your email</h1>
                <input required
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    placeholder='example@email.com'
                    className='hover:border rounded-xl px-5 py-3 w-full text-lg bg-[#eeeeee] mb-3' />
                <h1 className='text-2xl mb-3'>Enter your password</h1>
                <input required
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    placeholder='password'
                    className='hover:border rounded-xl px-5 py-3 w-full text-lg bg-[#eeeeee]' />
                <button className='flex items-center justify-center py-5 w-full bg-black text-white text-xl rounded-xl mt-6'>Login</button>
            </form>
            <h3 className='text-center mt-3'>New here? <Link to='/user/register' className='text-blue-600'>Create new Account</Link></h3>
            <h3 className='mt-10 opacity-50'>By continuing, you agree to emails or texts from Uber and its affiliates.</h3>
            <Link to='/captain/login' className='flex items-center justify-center py-5 w-full bg-[#001554] text-white text-xl rounded-xl mt-75'>Log In as a Captain</Link>
        </div>
    )
}

export default UserLogin