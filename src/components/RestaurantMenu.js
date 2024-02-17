import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../constants"
import Shimmer from "./Shimmer"
import MenuList from "./MenuList"
import useRestaurant from "../utils/useRestaurant"

const RestaurantMenu = () => {
  const { id } = useParams()
  const { restaurantData, restaurantMenu, notifier } = useRestaurant(id)
  console.log(restaurantData)

  if (restaurantData.length === 0) {
    return <Shimmer />
  }

  return (
    <div className='restaurant-menu my-8 mx-8 flex justify-center items-center flex-col shadow-2xl  rounded-xl bg-white'>
      <div className='restaurant-details mt-4 flex flex-wrap justify-around items-center w-4/5 h-auto'>
        <div className='section-1 flex h-60 w-4/5'>
          <img
            className='img w-1/3 h-auto bg-cover rounded-lg'
            src={`${IMG_CDN_URL}${restaurantData?.cloudinaryImageId}`}
            alt='restaurant'
          />
          <div className='sub-section-1 flex flex-col justify-center mx-5 leading-8 m-1 text-slate-600'>
            <h2 className='text-black mb-5 font-bold text-2xl'>
              {restaurantData?.name}
            </h2>
            <p>{restaurantData?.cuisines?.join(", ")}</p>
            <p>
              {restaurantData?.areaName},{" "}
              {restaurantData?.sla?.lastMileTravelString}
            </p>
            <p>{notifier}</p>
          </div>
        </div>
        <div className='section-3'>
          <h4 className='text-black font-bold mb-2 flex justify-center'>
            {restaurantData?.city}
          </h4>
          <div className='rating bg-white flex flex-col justify-evenly items-center border border-gray-500 rounded-lg p-2 h-14 text-sm text-gray-800'>
            <p className='text-green-800 text-lg font-bold'>
              {restaurantData?.avgRatingString} ✪
            </p>
            <hr className='divider w-full' />
            <p className='font-bold text-gray-600'>
              {restaurantData?.totalRatingsString}
            </p>
          </div>
          <h4 className='text-black font-bold mt-2 flex justify-center'>
            {restaurantData?.costForTwoMessage}
          </h4>
          <p className='font-bold mt-2'>
            {`${
              restaurantData?.sla?.minDeliveryTime
                ? "⏱ " + restaurantData?.sla?.minDeliveryTime + " MINS"
                : ""
            }`}
          </p>
        </div>
      </div>
      <div className='restaurant-menu'>
        <MenuList restaurantMenu={restaurantMenu} />
      </div>
    </div>
  )
}

export default RestaurantMenu
