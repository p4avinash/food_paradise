import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([])
  const [restaurantName, setRestaurantName] = useState("")
  const { id } = useParams()
  let restaurantMenuURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.1451947&lng=85.3689199&restaurantId=${
    id ? id : 0
  }`

  const fetchRestaurantMenu = async () => {
    const response = await fetch(restaurantMenuURL)
    const data = await response.json()
    console.log(data?.data?.cards[0]?.card?.card?.info)
    setRestaurantName(data?.data?.cards[0]?.card?.card?.info?.name)
    // console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  }

  useEffect(() => {
    fetchRestaurantMenu()
  }, [])

  return (
    <>
      <h1>Restaurant Id: {id}</h1>
      <h1>{restaurantName}</h1>
    </>
  )
}

export default RestaurantMenu
