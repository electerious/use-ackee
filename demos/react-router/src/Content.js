import { Link, Route, Switch, useLocation } from 'react-router-dom'

import useAckee from 'use-ackee'

import About from './About'
import Dashboard from './Dashboard'
import Home from './Home'

const Content = () => {
  const location = useLocation()

  useAckee(
    location.pathname,
    {
      server: 'https://example.com',
      domainId: 'hd11f820-68a1-11e6-8047-79c0c2d9bce0',
    },
    {
      ignoreLocalhost: false,
    },
  )

  return (
    <div>
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

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  )
}

export default Content
