import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { filterData } from "./utils"
import SearchBox from "./Searchbox"
import { Link } from "react-router-dom"

const proxyUrl = "https://pacific-badlands-15182.herokuapp.com/"
const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1451947&lng=85.3689199&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`

// function filterData(searchText, restaurantList) {
//   const filteredData = restaurantList.filter((item) =>
//     item?.info?.name.toLowerCase().includes(searchText.toLowerCase())
//   )

//   return filteredData
// }

const Body = () => {
  // const [searchText, setSearchText] = useState("")
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
  const [allRestaurantList, setAllRestaurantList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    try {
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
        {/* <div className='search-container'>
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
              const data = filterData(searchText, allRestaurantList)
              setFilteredRestaurantList(data)
            }}
          >
            Search
          </button>
        </div> */}
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
      {/* <div className='search-container'>
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
            const data = filterData(searchText, allRestaurantList)
            setFilteredRestaurantList(data)
          }}
        >
          Search
        </button>
      </div> */}

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
