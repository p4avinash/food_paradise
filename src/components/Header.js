import { useState } from "react"
import Logo from "../assets/img/food_paradise.png"
import { Link } from "react-router-dom"

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
        <ul className='nav-items-ul'>
          <Link to='/'>
            <li className='list-item'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='list-item'>About</li>
          </Link>
          <Link to='/contact'>
            <li className='list-item'>Contact</li>
          </Link>
          <Link to='/cart'>
            <li className='list-item'>Cart</li>
          </Link>
          <Link to='/instamart'>
            <li className='list-item'>Instamart</li>
          </Link>

          {isLoggedIn ? (
            <button
              className='auth-btn list-item'
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className='auth-btn list-item'
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header
