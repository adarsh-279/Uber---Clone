import React, { createContext, useState } from 'react'

export const AppDataContext = createContext()

const AppContext = ({ children }) => {
    
    const [data, setData] = useState({
        fullname: {
            firstName: '',
            lastName: ''
        },
        email: ''
    })

    return (
        <div>
            <AppDataContext.Provider value={data}>
                {children}
            </AppDataContext.Provider>
        </div>
    )
}

export default AppContext