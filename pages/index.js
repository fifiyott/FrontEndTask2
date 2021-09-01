import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
// import styles from '../styles/Home.module.sass'
import Navbar from './components/Navbar'
import Link from 'next/link'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brands | Home</title>
        <meta name="keywords" content="brands"></meta>
      </Head>
 {/* <Navbar />   */}
      <div className={styles['home-section']}>
        <div className={styles['home-image']}>
          <Image
          src="/cover.jpg"
          alt="Picture of the author"
          width={600}
          height={400}
          />
        </div>
        <div className={styles['home-text']}>
        {/* <h1 className={styles.card}>Homepage</h1> */}
        <h1>Homepage</h1> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
          <Link href="/brands/" >
            <a className={styles['home-btn']}>See Brand Listing</a>
          </Link>
        </div>
      </div>
        
  {/* <Footer/>   */}

      </div>
  )
}