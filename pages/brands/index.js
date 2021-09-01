import Link from "next/link";
import Image from "next/image";
import Head from 'next/head'
import styles from "../../styles/brands.module.css"


const Brands = () => {
    return (
      <div className={styles['brands']}> 
        <Head>
          <title>Brands | List</title>
          <meta name="keywords" content="brands"></meta>
        </Head>
        <div className={styles['brands-text']}>
          <h1>All Brands</h1>
        </div>

        <div className={styles['brands-link']}>
          <div className={styles['brands-card']}>
            <Image src="/nike-logo.jpg" alt="Nike" width={500} height={500}/>
            <Link href="https://www.nike.com/id/w/sale-3yaep" >
              <a className={styles['brands-btn']}>Nike</a>
            </Link>
          </div>
          <div className={styles['brands-card']}>
            <Image src="/reebok-logo.png" alt="Reebok" width={500} height={500}/>
            <Link href="https://www.reebok.id/sale.html" >
              <a className={styles['brands-btn']}>Reebok</a>
            </Link>
          </div>
          <div className={styles['brands-card']}>
            <Image src="/puma-logo.png" alt="Puma" width={500} height={500}/>
            <Link href="https://in.puma.com/" >
              <a className={styles['brands-btn']}>Puma</a>
            </Link>
          </div>
          <div className={styles['brands-card']}>
            <Image src="/adidas-logo.png" alt="Adidas" width={500} height={500}/>
            <Link href="https://www.adidas.co.id/" >
              <a className={styles['brands-btn']}>Adidas</a>
            </Link>
            <Link href="ss" >
              <a className={styles['brands-btn']}>Adidas</a>
            </Link>
          </div>
        </div>

        {/* <h2>Nike</h2>

        <h2>Reebok</h2>
        <h2>Puma</h2>
        <h2>Adidas</h2> */}
        
      </div>
    );
  }
   
  export default Brands;