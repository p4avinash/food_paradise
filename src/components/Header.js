import { useState } from "react"
import Logo from "../assets/img/food_paradise.png"

const loggedInUser = () => {
  // API call to authenticate user
  return true
}

const Title = () => {
  return (
    <a className='logo-link' href='/'>
      <img src={Logo} id='logo' alt='logo' className='logo' />
    </a>
  )
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          {isLoggedIn ? (
            <button className='auth-btn' onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          ) : (
            <button className='auth-btn' onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header
