import Head from 'next/head'
import { useRouter } from 'next/router'
import useAckee from 'use-ackee'

import Nav from '../components/nav'

const title = 'useAckee with Next.js'

const UseAckeeApp = ({ Component, pageProps }) => {
  const { pathname } = useRouter()

  useAckee(pathname, {
    domainId: 'hd11f820-68a1-11e6-8047-79c0c2d9bce0',
    server: 'https://example.com',
  })

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav title={title} />
      <Component {...pageProps} />
    </>
  )
}

export default UseAckeeApp
