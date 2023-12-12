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

export default Header
