import React from "react"
import { useSelector } from "react-redux"
import FoodItem from "./FoodItem"
import { uid } from "uid"

const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items
  })

  return (
    <div className='flex flex-col justify-start'>
      <h1 className='text-black font-bold text-2xl'>Cart</h1>

      {cartItems?.map((item, index) => (
        <FoodItem key={uid()} {...cartItems[index]} />
      ))}
    </div>
  )
}

export default Cart
