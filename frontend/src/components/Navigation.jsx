import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <div className='w-full h-25 pt-2 pb-4 bg-white border-2 border-[#6764643d] text-center flex items-center justify-around'>
                <Link to="/home"><i className="ri-home-5-fill hover:bg-black text-[#727272] text-3xl"></i><br></br>Home</Link>
                <Link to="/home"><i className="ri-draggable hover:bg-black text-[#727272] text-3xl"></i><br></br>Services</Link>
                <Link to="/home"><i className="ri-bookmark-2-fill hover:bg-black text-[#727272] text-3xl"></i><br></br>Activity</Link>
                <Link to="/home"><i className="ri-user-fill hover:bg-black text-[#727272] text-3xl"></i><br></br>Account</Link>
            </div>
        </>
    )
}

export default Navigation