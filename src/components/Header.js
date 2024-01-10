import { useState } from "react"

const loggedInUser = () => {
  // API call to authenticate user
  return true
}

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
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  )
}

export default Header
