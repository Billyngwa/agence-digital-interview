"use client"
import React, {  createContext, useState } from 'react'

const initialValues = {
    selectedCat:[],
    setSelectedCat:()=>{},
    cart:[],
    setCart: () => {},
}

export const AppContext = createContext(initialValues)

const ContextProvider = ({children}) => {
    const [selectedCat, setSelectedCat] = useState("")
    const [cart,setCart] = useState([])


    let values = {
        selectedCat,
        setSelectedCat,
        cart,
        setCart
    }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
