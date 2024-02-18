import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../utils/slices/cartSlice"
import FoodItem from "./FoodItem"
import { uid } from "uid"

const Cart = () => {
  const dispatch = useDispatch()

  const cartItems = useSelector((store) => {
    return store.cart.items
  })

  return (
    <div className='flex flex-col justify-start'>
      {cartItems.length <= 0 ? (
        <h1 className='text-black font-bold text-2xl m-4'>Cart Empty...!!</h1>
      ) : (
        <button
          onClick={() => dispatch(clearCart())}
          className='bg-red-700 text-white font-bold p-2 rounded-lg sm:mx-[15rem] lg:mx-[53rem] active:translate-y-1 active:scale-90 hover:ease-in-out duration-100 shadow-md mb-12'
        >
          Clear Cart
        </button>
      )}
      {cartItems?.map((item, index) => (
        <FoodItem key={uid()} {...cartItems[index]} />
      ))}
    </div>
  )
}

export default Cart
