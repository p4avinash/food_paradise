import RestaurantCard from "./RestaurantCard"
import { restaurantsList } from "../constants"
import { useState } from "react"

function filterData(searchText, restaurantList) {
  const filteredData = restaurantList.filter((item) =>
    item.info.name.toLowerCase().includes(searchText.toLowerCase())
  )

  console.log(searchText.length)

  // if (searchText.length == 0) {
  //   return restaurantList
  // }

  return filteredData
}

const Body = () => {
  const [searchText, setSearchText] = useState("")
  const [restaurantList, setRestaurantList] = useState(restaurantsList)

  return (
    <>
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
    </>
  )
}

export default Body
