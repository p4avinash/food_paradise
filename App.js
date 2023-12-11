import React from "react"
import ReactDOM from "react-dom/client"

/**
       Header
          - Logo
          - Nav Links (Right Side)
          - Cart
       Body
          - Search bar
          - Restaurant List
            - Restaurant Card
              - Image
              - Name
              - Rating
              - Cusines
       Footer
          - Links
          - Copyright
        
       */

const Title = () => {
  return (
    <a className='logo-link' href='/'>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV5zuo3igQnNdcRxNtyyjvFBn9v8qCfIUTYXFBbHTHbNSUiz2qrNB_QpRSzt_Qs19XrkA&usqp=CAU'
        id='logo'
        alt='logo'
        className='logo'
      />
    </a>
  )
}

const HeaderComponent = () => {
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const restaurantsList = [
  {
    info: {
      id: "710418",
      name: "MBA Chai Wala",
      cloudinaryImageId: "8be3bc028cc925f4d31f9c45688ff874",
      locality: "Circuit House Road",
      areaName: "Muz_Muzaffarpur_City",
      costForTwo: "₹300 for two",
      cuisines: ["Beverages", "Fast Food", "Italian-American", "Snacks"],
      avgRating: 3.6,
      veg: true,
      feeDetails: {
        restaurantId: "710418",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1500,
      },
      parentId: "134120",
      avgRatingString: "3.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-07 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8cbd79c7-d365-4c28-8aec-593d79362967",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mba-chai-wala-circuit-house-road-muz-muzaffarpur-city-muzaffarpur-710418",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "644104",
      name: "Chicago Pizza",
      cloudinaryImageId: "2643d02fc1a1066b092ea4867ce1c0df",
      locality: "Club Road",
      areaName: "Muzaffarpur",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "644104",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1500,
      },
      parentId: "60277",
      avgRatingString: "3.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-07 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8cbd79c7-d365-4c28-8aec-593d79362967",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/chicago-pizza-club-road-muzaffarpur-muzaffarpur-644104",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "774779",
      name: "Haldiram's Prabhuji",
      cloudinaryImageId: "5a1fe9fe42b1683059385d19c0413963",
      locality: "GolaRoad",
      areaName: "Muzaffarpur City",
      costForTwo: "₹450 for two",
      cuisines: [
        "Sweets",
        "North Indian",
        "South Indian",
        "Chinese",
        "Desserts",
        "Beverages",
      ],
      avgRating: 3.3,
      veg: true,
      feeDetails: {
        restaurantId: "774779",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1500,
      },
      parentId: "2945",
      avgRatingString: "3.3",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-07 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8cbd79c7-d365-4c28-8aec-593d79362967",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/haldirams-prabhuji-golaroad-muzaffarpur-city-muzaffarpur-774779",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "753764",
      name: "Vadilal Ice Creams",
      cloudinaryImageId: "3fb0b5c56d29759520d69213ba4fef8f",
      locality: "Brahmapura Main road",
      areaName: "Muzaffarpur City",
      costForTwo: "₹250 for two",
      cuisines: ["Ice Cream"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "753764",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1500,
      },
      parentId: "11745",
      avgRatingString: "4.2",
      totalRatingsString: "6",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-07 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8cbd79c7-d365-4c28-8aec-593d79362967",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/vadilal-ice-creams-brahmapura-main-road-muzaffarpur-city-muzaffarpur-753764",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "274757",
      name: "Food Court",
      cloudinaryImageId: "owd0wgmb7lqtjotafit6",
      locality: "Imlichatti Road",
      areaName: "Muzaffarpur",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Desserts", "South Indian"],
      avgRating: 3.4,
      feeDetails: {
        restaurantId: "274757",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "9659",
      avgRatingString: "3.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-07 21:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8cbd79c7-d365-4c28-8aec-593d79362967",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/food-court-imlichatti-road-muzaffarpur-muzaffarpur-274757",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "319219",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "eefqcnm889ur9b3wzlms",
      locality: "Sanjay Cinema Road",
      areaName: "Muzaffarpur",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "319219",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1500,
      },
      parentId: "582",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-07 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8cbd79c7-d365-4c28-8aec-593d79362967",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-sanjay-cinema-road-muzaffarpur-muzaffarpur-319219",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "659963",
      name: "Mishthanpur",
      cloudinaryImageId: "0a9f7cccbc94b3fb0ea7842be79866c1",
      locality: "Kakrania complex",
      areaName: "Mithanpura ",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Beverages"],
      avgRating: 4,
      veg: true,
      feeDetails: {
        restaurantId: "659963",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2700,
      },
      parentId: "396513",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "37 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-07 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8cbd79c7-d365-4c28-8aec-593d79362967",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mishthanpur-kakrania-complex-mithanpura-muzaffarpur-659963",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "369164",
      name: "Biryani Maharaj",
      cloudinaryImageId: "qgthkrhsblq3ruyekmlh",
      locality: "DRB Mall",
      areaName: "Muzaffarpur",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "Hyderabadi", "North Indian", "Tandoor", "Chinese"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "369164",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "46846",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-07 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹175 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8cbd79c7-d365-4c28-8aec-593d79362967",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/biryani-maharaj-drb-mall-muzaffarpur-muzaffarpur-369164",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "274149",
      name: "Rajasthani Chulha ( Desi Rajasthani Food Prepared By Ghar Ka Chulaha )",
      cloudinaryImageId: "uyutfcbsksh0d28fza0g",
      locality: "Sutapatti",
      areaName: "Muzaffarpur",
      costForTwo: "₹200 for two",
      cuisines: ["Indian"],
      avgRating: 3.8,
      veg: true,
      feeDetails: {
        restaurantId: "274149",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1500,
      },
      parentId: "165371",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-07 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8cbd79c7-d365-4c28-8aec-593d79362967",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/rajasthani-chulha-desi-rajasthani-food-prepared-by-ghar-ka-chulaha-sutapatti-muzaffarpur-muzaffarpur-274149",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
]

const RestaurantCard = ({ restaurant }) => {
  let imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`
  let name = restaurant?.info?.name || "Not Found"
  let cuisines = restaurant?.info?.cuisines || "Not Found"
  let rating = restaurant?.info?.avgRating || "Not Found"
  let distance = restaurant?.info?.sla?.lastMileTravelString || "Not Found"

  return (
    <div className='card'>
      <img src={imageUrl} alt='food-image' />
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{rating} stars</h4>
      <h4>{distance}</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className='restaurant-list'>
      {restaurantsList.map((restaurant) => {
        return (
          <div key={restaurant.info.id}>
            <RestaurantCard restaurant={restaurant} />
          </div>
        )
      })}
    </div>
  )
}

const Footer = () => {
  return <h4>Footer</h4>
}

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"))

// async defer
root.render(<AppLayout />)
