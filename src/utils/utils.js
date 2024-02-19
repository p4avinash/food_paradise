function filterData(searchText, restaurantList) {
  // const cuisinesArray = restaurantList.map((item) => {
  //   console.log(item?.info?.cuisines)
  // })

  const filteredData = restaurantList.filter((item) => {
    return item?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  })

  return filteredData
}

function fetchCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (locationData) => {
          let latitude = locationData.coords.latitude
            ? locationData.coords.latitude
            : 26.1451947
          let longitude = locationData.coords.longitude
            ? locationData.coords.longitude
            : 85.3689199
          resolve({ latitude, longitude })
        },
        (error) => {
          reject(error)
        }
      )
    } else {
      reject(new Error("Geolocation is not supported by this browser."))
    }
  })
}

export { filterData, fetchCurrentLocation }
