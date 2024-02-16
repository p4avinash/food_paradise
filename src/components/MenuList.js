import React, { useState, useEffect } from "react"

const MenuList = ({ restaurantMenu }) => {
  const [allMenuItems, setAllMenuItems] = useState([])

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
        {allMenuItems.map((item, index) => {
          return <li key={index}>{item?.card?.info?.name}</li>
        })}
      </ul>
    </div>
  )
}

export default MenuList
