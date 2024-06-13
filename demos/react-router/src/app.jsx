import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import useAckee from 'use-ackee'

import Nav from './components/nav'
import Home from './pages/home'
import About from './pages/about'
import Dashboard from './pages/dashboard'

const title = 'useAckee with React Router'

// `useLocation` must be called below the react-router context provider
const Ackee = () => {
  const { pathname } = useLocation()

  useAckee(pathname, {
    server: 'https://example.com',
    domainId: 'hd11f820-68a1-11e6-8047-79c0c2d9bce0',
  })

  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <Ackee />
      <Nav title={title} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
