import React from 'react'
import { Switch, Route, Link, useLocation } from 'react-router-dom'

import useAckee from 'use-ackee'

import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'

const Content = () => {

	const location = useLocation()

	useAckee(location.pathname, {
		server: 'https://example.com',
		domainId: 'hd11f820-68a1-11e6-8047-79c0c2d9bce0'
	}, {
		ignoreLocalhost: false
	})

	console.log(location)

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