// import '../styles/globals.css'
import '../styles/globals.scss'
import Layout from './components/Layout'

function MyApp({ Component, pageProps }) {
  //return <Component {...pageProps} />
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
