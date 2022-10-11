import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from 'remix'
import useAckee from 'use-ackee'

import Nav from './components/nav'

const title = 'useAckee with Remix'

export function meta() {
  return { title }
}

const UseAckeeRootLayout = () => {
  const { pathname } = useLocation()

  useAckee(pathname, {
    server: 'https://example.com',
    domainId: 'hd11f820-68a1-11e6-8047-79c0c2d9bce0',
  })

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Nav title={title} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default UseAckeeRootLayout
