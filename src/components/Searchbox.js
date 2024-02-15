import React, { useState } from "react"
import { filterData } from "../utils/utils"

const SearchBox = ({ allRestaurantList, setFilteredRestaurantList }) => {
  const [searchText, setSearchText] = useState("")

  return (
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
          const data = filterData(searchText, allRestaurantList)
          setFilteredRestaurantList(data)
        }}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBox
