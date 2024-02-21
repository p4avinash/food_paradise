import { fetchCurrentLocation } from "./utils"
import { useState, useEffect } from "react"

const useRestaurant = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState([])
  const [restaurantData, setRestaurantData] = useState([])
  const [notifier, setNotifier] = useState([])
  const fetchRestaurantMenu = async () => {
    try {
      const coordinates = await fetchCurrentLocation()
      // console.log("coordinates-RestaurantMenu", coordinates)

      let restaurantMenuURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${
        coordinates?.latitude
      }&lng=${coordinates?.longitude}&restaurantId=${id ? id : 0}`

      // restaurantMenuURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.6215229&lng=85.1213044&restaurantId=${
      //   id ? id : 0
      // }`

      const response = await fetch(restaurantMenuURL)
      const data = await response.json()

      console.log("data --- ", data?.data?.cards[2]?.card?.card?.info)

      // console.log(data?.data?.cards[0]?.card?.card.info)

      // console.log(
      //   "from RestaurantMenu component ---",
      //   data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      // )

      setRestaurantMenu(
        data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      )

      setRestaurantData(data?.data?.cards[0]?.card?.card?.info)

      setNotifier(
        data?.data?.cards[0]?.card?.card?.info.expectationNotifiers[0].text
      )
    } catch (error) {
      console.log("something went wrong while fetching the restaurant data")
    }
  }

  useEffect(() => {
    fetchRestaurantMenu()
  }, [])

  return { restaurantData, restaurantMenu, notifier }
}

export default useRestaurant
