import RestaurantCard from "./RestaurantCard"
import { restaurantsList } from "../constants"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"

function filterData(searchText, restaurantList) {
  const filteredData = restaurantList.filter((item) =>
    item.info.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return filteredData
}

const Body = () => {
  const [searchText, setSearchText] = useState("")
  const [restaurantList, setRestaurantList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1451947&lng=85.3689199&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
      const data = await response.json()
      const restaurantData =
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || restaurantsList

      setRestaurantList(restaurantData)
      setIsLoading(false)
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  return (
    <>
      {isLoading ? (
        <Shimmer />
      ) : (
        <div>
          <div className='search-container'>
            <input
              type='text'
              name='search'
              placeholder='Search'
              className='search-input'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              type='button'
              className='search-btn'
              onClick={() => {
                const data = filterData(searchText, restaurantList)
                setRestaurantList(data)
              }}
            >
              Search
            </button>
          </div>
          <div className='restaurant-list'>
            {restaurantList.map((restaurant) => {
              return (
                <div key={restaurant.info.id}>
                  <RestaurantCard restaurant={restaurant} />
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* <div>
        <div className='search-container'>
          <input
            type='text'
            name='search'
            placeholder='Search'
            className='search-input'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            type='button'
            className='search-btn'
            onClick={() => {
              const data = filterData(searchText, restaurantList)
              setRestaurantList(data)
            }}
          >
            Search
          </button>
        </div>
        <div className='restaurant-list'>
          {restaurantList.map((restaurant) => {
            return (
              <div key={restaurant.info.id}>
                <RestaurantCard restaurant={restaurant} />
              </div>
            )
          })}
        </div>
      </div> */}
    </>
  )
}

export default Body
