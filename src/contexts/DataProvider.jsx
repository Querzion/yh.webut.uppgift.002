// import React, { createContext, useState, useEffect } from 'react'

// export const DataContext = createContext()

// const DataProvider = ({children}) => {
//     const [data, setData] = useState([])

//     const fetchData = async (location = 'defaultEndpoint') => {
//         try {
//             const res = await fetch(`https://win24-assignment.azurewebsites.net/api/${location}`)
//             const fetchedData = await res.json() // Await the json() response
//             setData(Array.isArray(fetchedData) ? fetchedData : []) // Ensure data is an array
//         } catch (error) {
//             console.error("Error fetching data:", error)
//             setData([]) // Fallback to an empty array in case of an error
//         }
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])

//     return (
//         <DataContext.Provider value={{ data, setData, fetchData }}>
//             {children} 
//         </DataContext.Provider>
//     )
// }

// export default DataProvider