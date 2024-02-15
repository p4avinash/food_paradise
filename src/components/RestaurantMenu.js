import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../constants"
import Shimmer from "./Shimmer"
import MenuList from "./MenuList"
import useRestaurant from "../utils/useRestaurant"

const RestaurantMenu = () => {
  const { id } = useParams()
  const { restaurantData, restaurantMenu, notifier } = useRestaurant(id)

  if (restaurantData.length === 0) {
    return <Shimmer />
  }

  return (
    <div className='restaurant-menu'>
      <div className='restaurant-details'>
        <div className='section-1'>
          <img
            className='img'
            src={`${IMG_CDN_URL}${restaurantData?.cloudinaryImageId}`}
            alt='restaurant'
          />
          <div className='sub-section-1'>
            <h2>{restaurantData?.name}</h2>
            <p>{restaurantData?.cuisines?.join(", ")}</p>
            <p>
              {restaurantData?.areaName},{" "}
              {restaurantData?.sla?.lastMileTravelString}
            </p>
            <p>{notifier}</p>
          </div>
        </div>
        <div className='section-3'>
          <h4>{restaurantData?.city}</h4>
          <div className='rating'>
            <p>{restaurantData?.avgRatingString} ✪</p>
            <hr className='divider' />
            <p>{restaurantData?.totalRatingsString}</p>
          </div>
          <h4>{restaurantData?.costForTwoMessage}</h4>
        </div>
      </div>
      <div className='restaurant-menu'>
        <MenuList restaurantMenu={restaurantMenu} />
      </div>
    </div>
  )
}

export default RestaurantMenu
