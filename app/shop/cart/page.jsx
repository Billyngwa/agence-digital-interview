"use client"
import { useContext, useEffect } from 'react'
import { AppContext } from '@context'

const Cart = () => {
    const {cart} = useContext(AppContext)
    console.log(cart);
    useEffect(()=> {
        const pa = () => {
        }
        pa()
    },[])
  return (
    <div>
        Cart

    </div>
  )
}

export default Cart