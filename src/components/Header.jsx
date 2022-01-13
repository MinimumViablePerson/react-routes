import { Link } from 'react-router-dom'

function Header () {
  return (
    <header>
      <h1>Routes!!!</h1>
      <nav>
        <ul className='nav-links'>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/photos'>Photos</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
