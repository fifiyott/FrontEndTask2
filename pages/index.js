import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Navbar from './components/Navbar'
import Link from 'next/link'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
 {/* <Navbar />   */}
      <div className="home-section">
        <div className='home-image'>
          <Image
          src="/cover.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          />
        </div>
        <div className='home-text'>
        <h1>Homepage</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
          <Link href="/brands/">
            <a>See Brand Listing</a>
          </Link>
        </div>
      </div>
        
  {/* <Footer/>   */}

      </div>
  )
}