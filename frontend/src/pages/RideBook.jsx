import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LocationSearchPanel from './LocationSearchPanel'

const RideBook = () => {

    const navigate = useNavigate()
    const [pickup, setPickup] = useState('')
    const [dropPoint, setdropPoint] = useState('')
    const [panelOpen, setPanelOpen] = useState(true)

    const submitHandler = () => { }

    return (
        <div className='relative font-[Uber-Medium]'>
            <i onClick={()=>{navigate('/home')}} className="ri-arrow-left-line absolute text-3xl font-bold bg-[#E8E8E8] p-3 rounded"></i>
            <div>
                <img className='h-full w-full object-cover' 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUia_MZ68vuezI9kMgNBLfKqWbKlQU9U2Zbg&s" 
                    alt="" />
            </div>

            {/* PANEL */}
            <div 
                className={`
                    absolute top-0 w-full h-screen flex flex-col
                    transition-transform duration-500 ease-in-out
                    ${panelOpen ? 'translate-y-0' : 'translate-y-160'}
                `}
            >
                <div className='h-[25%] bg-white p-5 relative'>
                    <i 
                        onClick={() => setPanelOpen(!panelOpen)} 
                        className="ri-arrow-down-wide-line font-bold text-2xl absolute right-5 top-5 cursor-pointer"
                    ></i>

                    <h1 className='text-center text-2xl font-semibold mb-15'>Plan your trip</h1>

                    <form
                        onSubmit={submitHandler}
                        className='flex flex-col border-2 rounded-xl p-3 gap-2 text-lg'
                    >
                        <div className='line absolute w-0.5 h-17 ml-2 bg-black rounded-full'></div>

                        <input
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                            className='w-full px-8'
                            type="text"
                            placeholder='Your location'
                        />

                        <input
                            value={dropPoint}
                            onChange={(e) => setdropPoint(e.target.value)}
                            className='w-full px-8'
                            type="text"
                            placeholder='Where to?'
                        />
                    </form>
                </div>

                <div className='h-[75%] bg-white'>
                    <LocationSearchPanel />
                </div>
            </div>
        </div>
    )
}

export default RideBook
