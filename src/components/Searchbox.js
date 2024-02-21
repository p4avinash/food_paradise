import React, { useContext, useState } from "react"
import { filterData } from "../utils/utils"
import userContext from "../utils/userContext"

const SearchBox = ({ allRestaurantList, setFilteredRestaurantList }) => {
  const [searchText, setSearchText] = useState("")
  const { user, setUser } = useContext(userContext)

  return (
    <div
      data-testid='search-element'
      className='search-container flex justify-center p-3 pb-8'
    >
      <input
        type='text'
        name='search'
        placeholder='Search'
        className='search-input p-2 rounded-lg outline-none border-2 hover:border-green-600 duration-500 ease-in-out'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {/* <input
        type='text'
        placeholder='testing'
        onChange={(e) =>
          setUser({
            name: e.target.value,
            email: "apple@ceo.com",
          })
        }
        defaultValue={user.name}
      /> */}
      <button
        type='button'
        className='search-btn px-2 scale-90 bg-cyan-700 rounded-lg text-white active:translate-y-1 active:scale-75 hover:ease-in-out duration-100 shadow-md'
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
