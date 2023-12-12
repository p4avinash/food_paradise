import RestaurantCard from "./RestaurantCard"
import { restaurantsList } from "../constants"
import { useState } from "react"

const Body = () => {
  const [searchText, setSearchText] = useState("")

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
        <button type='button' className='search-btn'>
          Search
        </button>
      </div>
      <div className='restaurant-list'>
        {restaurantsList.map((restaurant) => {
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
