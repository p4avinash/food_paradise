function filterData(searchText, restaurantList) {
  const filteredData = restaurantList.filter((item) =>
    item?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return filteredData
}

export { filterData }
