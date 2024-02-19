import { useState } from "react"
import Logo from "../assets/img/food_paradise_logo1.png"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const loggedInUser = () => {
  // API call to authenticate user
  return true
}

const Title = () => {
  return (
    <a className='logo-link' href='/'>
      <img
        src={Logo}
        id='logo'
        alt='logo'
        data-testid='logo'
        className='logo  h-36 w-36'
      />
    </a>
  )
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const cartItemsCount = useSelector((store) => {
    return store.cart.items.length
  })

  return (
    <div className='header scroll-smooth  sticky top-0 z-10 bg-white flex items-center rounded-2xl justify-between shadow-xl mb-12'>
      <Title />
      <div className='nav-items p-2   text-gray-800'>
        <ul className='nav-items-ul flex space-x-6  justify-center items-center'>
          <Link to='/'>
            <li className='list-item'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='list-item'>About</li>
          </Link>
          <Link to='/contact'>
            <li className='list-item'>Contact</li>
          </Link>

          <Link to='/instamart'>
            <li className='list-item'>Instamart</li>
          </Link>
          <Link to='/cart'>
            <li className='list-item mr-16'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 16 16'
                className='h-6 w-6'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'></path>
              </svg>
              <span
                data-testid='cart'
                className='rounded-full bg-cyan-800 px-[8px] absolute top-[45px] right-[135px] text-white'
              >
                {cartItemsCount}
              </span>
            </li>
          </Link>

          {isLoggedIn ? (
            <button
              className='auth-btn list-item bg-cyan-700 p-2 text-white rounded-lg '
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className='auth-btn list-item  bg-cyan-700 p-2 text-white rounded-lg'
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
