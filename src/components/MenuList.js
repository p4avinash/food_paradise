import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/slices/cartSlice"
import { uid } from "uid"

const MenuList = ({ restaurantMenu }) => {
  const [allMenuItems, setAllMenuItems] = useState([])
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  const getAllMenuItems = () => {
    let allCAtegories = restaurantMenu
      .map((item) => {
        return item?.card?.card?.itemCards
      })
      .filter((item) => {
        return item != undefined
      })
      .flat()

    // console.log(allCAtegories)
    setAllMenuItems(allCAtegories)
  }

  useEffect(() => {
    getAllMenuItems()
  }, [])

  return (
    <div>
      <h1 className='text-black font-bold text-2xl mb-4 mt-10'>Menulist</h1>
      <ul>
        {allMenuItems.map((item) => {
          return (
            <div key={uid()} className='flex space-x-6'>
              <li>{item?.card?.info?.name}</li>
              <button
                onClick={() => handleAddItem(item?.card?.info)}
                className='bg-cyan-700 text-white px-1 rounded-lg active:translate-y-1 active:scale-90 hover:ease-in-out duration-100 shadow-md'
              >
                Add
              </button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default MenuList
