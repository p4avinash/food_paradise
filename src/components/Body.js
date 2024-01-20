import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { fetchCurrentLocation } from "./utils"
import SearchBox from "./Searchbox"
import { Link } from "react-router-dom"

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
      console.log("coordinates", coordinates)

      let apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coordinates?.latitude}&lng=${coordinates?.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`

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

  if (filteredRestaurantList.length == 0 && allRestaurantList.length > 0) {
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
    <>
      <SearchBox
        allRestaurantList={allRestaurantList}
        setFilteredRestaurantList={setFilteredRestaurantList}
      />

      {isLoading ? (
        <Shimmer />
      ) : (
        <div>
          <div className='restaurant-list'>
            {filteredRestaurantList.map((restaurant) => {
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
    </>
  )
}

export default Body
