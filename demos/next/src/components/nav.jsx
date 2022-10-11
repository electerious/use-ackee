import Link from 'next/link'

const Nav = ({ title }) => {
  return (
    <nav>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
      </ul>
      <hr />
    </nav>
  )
}

export default Nav
