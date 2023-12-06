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

const RestaurantCard = () => {
  return (
    <div className='card'>
      <img
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2643d02fc1a1066b092ea4867ce1c0df'
        alt='food-image'
      />
      <h2>Chicago Pizza</h2>
      <h3>Pizzas, Muzaffarpur</h3>
      <h4>3.6 stars</h4>
    </div>
  )
}

const Body = () => {
  return (
    <>
      <h4>Body</h4>
      <RestaurantCard />
    </>
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
