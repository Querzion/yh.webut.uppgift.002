import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext()

const DataProvider = ({children}) => {
    const [data, setData] = useState([])

    const fetchData = async (location) => {
        const res = await fetch(`https://win24-assignment.azurewebsites.net/api/${location}`)
        const data = res.json()

        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <DataContext.Provider value={{ data, setData, fetchData }}>
            {children} 
        </DataContext.Provider>
    )
}

export default DataProvider