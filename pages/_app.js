import { SessionProvider } from 'next-auth/react'
import Layout from '../layout'
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
import { AudioContextProvider } from '../context/AudioContext'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <AudioContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AudioContextProvider>
    </SessionProvider>
  )
}

export default MyApp
