import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from '../pages/Start'
import UserLogin from '../pages/UserLogin'
import UserRegister from '../pages/UserRegister'
import CaptainLogin from '../pages/CaptainLogin'
import CaptainRegister from '../pages/CaptainRegister'
import Home from '../pages/Home'
import CaptainHome from '../pages/CaptainHome'
import UserProtectWrapper from '../pages/UserProtectWrapper'
import CaptainProtectWrapper from '../pages/CaptainProtectWrapper'
import RideBook from '../pages/RideBook'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Start/>} />
                <Route path='/user/login' element={<UserLogin />} />
                <Route path='/user/register' element={<UserRegister />} />
                <Route path='/captain/login' element={<CaptainLogin />} />
                <Route path='/captain/register' element={<CaptainRegister />} />
                <Route path='/home' element={
                    <UserProtectWrapper>
                        <Home />
                    </UserProtectWrapper>}
                />
                <Route path='/captain-home' element={
                    <CaptainProtectWrapper>
                        <CaptainHome />
                    </CaptainProtectWrapper>}
                />
                    <Route path='/ridebook' element={
                    <UserProtectWrapper>
                        <RideBook />
                    </UserProtectWrapper>}
                />
            </Routes>
        </div>
    )
}

export default Routing