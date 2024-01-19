import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../constants"
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([])
  const [restaurantData, setRestaurantData] = useState([])
  const [notifier, setNotifier] = useState([])

  const { id } = useParams()

  let restaurantMenuURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.1451947&lng=85.3689199&restaurantId=${
    id ? id : 0
  }`

  const fetchRestaurantMenu = async () => {
    try {
      const response = await fetch(restaurantMenuURL)
      const data = await response.json()

      setRestaurantData(data?.data?.cards[0]?.card?.card?.info)

      setNotifier(
        data?.data?.cards[0]?.card?.card?.info.expectationNotifiers[0].text
      )
      console.log(data?.data?.cards[0]?.card?.card.info)

      // console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    } catch (error) {
      console.log("something went wrong while fetching the restaurant data")
    }
  }

  useEffect(() => {
    fetchRestaurantMenu()
  }, [])

  if (restaurantData.length === 0) {
    return <Shimmer />
  }

  return (
    <div className='restaurant-menu'>
      <div className='restaurant-details'>
        <div className='section-1'>
          <img
            className='img'
            src={`${IMG_CDN_URL}${restaurantData?.cloudinaryImageId}`}
            alt='restaurant'
          />
          <div className='sub-section-1'>
            <h2>{restaurantData?.name}</h2>
            <p>{restaurantData?.cuisines?.join(", ")}</p>
            <p>
              {restaurantData?.areaName},{" "}
              {restaurantData?.sla?.lastMileTravelString}
            </p>
            <p>{notifier}</p>
          </div>
        </div>
        <div className='section-3'>
          <h4>{restaurantData?.city}</h4>
          <div className='rating'>
            <p>{restaurantData?.avgRatingString} ✪</p>
            <hr className='divider' />
            <p>{restaurantData?.totalRatingsString}</p>
          </div>
          <h4>{restaurantData?.costForTwoMessage}</h4>
        </div>
      </div>
      <div className='restaurant-menu'>{/* restaurant menu */}</div>
    </div>
  )
}

export default RestaurantMenu
