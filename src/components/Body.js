import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { fetchCurrentLocation } from "../utils/utils"
import SearchBox from "./Searchbox"
import { Link } from "react-router-dom"
import useIsOnline from "../utils/useIsOnline"

const Body = () => {
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
  const [allRestaurantList, setAllRestaurantList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    try {
      const coordinates = await fetchCurrentLocation()
      // console.log("coordinates-Body", coordinates)

      let apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coordinates?.latitude}&lng=${coordinates?.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`

      apiUrl = `/dapi/restaurants/list/v5?lat=25.6215229&lng=85.1213044&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`

      const response = await fetch(apiUrl)
      const data = await response.json()

      const restaurantData =
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants

      setFilteredRestaurantList(restaurantData)
      setAllRestaurantList(restaurantData)
      setIsLoading(false)
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  const isOnline = useIsOnline()

  if (!isOnline) {
    return (
      <h1 className='mb-60 mt-40 flex text-center justify-center text-2xl font-bold'>
        🔴 Offline, Please check you internet connection
      </h1>
    )
  }

  // console.log("filteredRestaurantList", filteredRestaurantList)

  if (filteredRestaurantList?.length == 0 && allRestaurantList.length > 0) {
    return (
      <div>
        <SearchBox
          allRestaurantList={allRestaurantList}
          setFilteredRestaurantList={setFilteredRestaurantList}
        />
        <h1>Nothing matched your search...</h1>
      </div>
    )
  }

  return (
    <div className=''>
      <SearchBox
        allRestaurantList={allRestaurantList}
        setFilteredRestaurantList={setFilteredRestaurantList}
      />

      {isLoading ? (
        <Shimmer />
      ) : (
        <div>
          <div
            data-testid='restaurants-list'
            className='restaurant-list  justify-center drop-shadow-xl grid-rows-3 gap-2 flex  flex-wrap mt-4 p-4 '
          >
            {filteredRestaurantList?.map((restaurant) => {
              return (
                <Link
                  key={restaurant.info.id}
                  to={`/restaurant/${restaurant.info.id}`}
                >
                  <div key={restaurant.info.id}>
                    <RestaurantCard restaurant={restaurant} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Body
