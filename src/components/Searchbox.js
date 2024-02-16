import React, { useState } from "react"
import { filterData } from "../utils/utils"

const SearchBox = ({ allRestaurantList, setFilteredRestaurantList }) => {
  const [searchText, setSearchText] = useState("")

  return (
    <div className='search-container flex justify-center p-3 pb-8'>
      <input
        type='text'
        name='search'
        placeholder='Search'
        className='search-input p-2 rounded-lg'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        type='button'
        className='search-btn p-2 bg-cyan-700 rounded-lg text-white'
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
