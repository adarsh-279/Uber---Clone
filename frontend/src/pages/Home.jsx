import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='h-screen w-full pt-10 flex justify-between flex-col bg-[url(home.png)] bg-cover font-[Uber-Medium]'>
                <img className='h-8 w-[20%] ml-15' src="logo.png" alt="" />
                <div className='bg-white py-5 px-5'>
                    <h1 className='text-3xl mb-8'>Get Started with Uber</h1>
                    <Link to='/user/login' className='flex items-center justify-center py-5 w-full bg-black text-white text-xl rounded-xl'>Contiue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home