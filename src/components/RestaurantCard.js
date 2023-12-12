import { IMG_CDN_URL } from "../constants"

const RestaurantCard = ({ restaurant }) => {
  let imageUrl = `${IMG_CDN_URL}${restaurant?.info?.cloudinaryImageId}`
  let name = restaurant?.info?.name || "Not Found"
  let cuisines = restaurant?.info?.cuisines || "Not Found"
  let rating = restaurant?.info?.avgRating || "Not Found"
  let distance = restaurant?.info?.sla?.lastMileTravelString || "Not Found"

  return (
    <div className='card'>
      <img src={imageUrl} alt='food-image' />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{rating} stars</h4>
      <h4>{distance}</h4>
    </div>
  )
}

export default RestaurantCard
