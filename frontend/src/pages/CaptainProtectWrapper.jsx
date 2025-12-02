import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainProtectWrapper = ({ children }) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)

    useEffect(() => {
            if (!token) {
                navigate('/captain/login')
            }
        }, [token])

    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper