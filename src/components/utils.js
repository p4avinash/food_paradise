function filterData(searchText, restaurantList) {
  const filteredData = restaurantList.filter((item) =>
    item?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return filteredData
}

function getGeoLocationData() {
  let latitude = 26.1451947
  let longitude = 85.3689199

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((locationData) => {
      latitude = locationData.coords.latitude
        ? locationData.coords.latitude
        : 26.1451947
      longitude = locationData.coords.longitude
        ? locationData.coords.longitude
        : 85.3689199
    })
  } else {
    console.log("Geolocation is not supported by this browser.")
  }

  return {
    latitude,
    longitude,
  }
}

export { filterData, getGeoLocationData }
