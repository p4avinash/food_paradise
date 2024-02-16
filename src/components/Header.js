import { useState } from "react"
import Logo from "../assets/img/food_paradise.png"
import { Link } from "react-router-dom"

const loggedInUser = () => {
  // API call to authenticate user
  return true
}

const Title = () => {
  return (
    <a className='logo-link ' href='/'>
      <img src={Logo} id='logo' alt='logo' className='logo h-28 p-2' />
    </a>
  )
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className='header bg-white flex p-1 items-center rounded-2xl justify-between shadow-xl mb-12 mt-2'>
      <Title />
      <div className='nav-items p-2'>
        <ul className='nav-items-ul flex space-x-3'>
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
