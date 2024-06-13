import { Link } from 'react-router-dom'

const Nav = ({ title }) => {
  return (
    <nav>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <hr />
    </nav>
  )
}

export default Nav
