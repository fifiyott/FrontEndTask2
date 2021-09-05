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
            <Image src="/nike-logo.jpg" alt="Nike" width={214} height={200}/>
            <Link href="/brands/nike" >
              <a className={styles['brands-btn']} target="_blank">Nike</a>
            </Link>
          </div>
          <div className={styles['brands-card']}>
            <Image src="/reebok-logo.png" alt="Reebok" width={214} height={200}/>
            <Link href="/brands/reebok" >
              <a className={styles['brands-btn']} target="_blank">Reebok</a>
            </Link>
          </div>
          <div className={styles['brands-card']}>
            <Image src="/puma-logo.png" alt="Puma" width={214} height={200}/>
            <Link href="/brands/puma" >
              <a className={styles['brands-btn']} target="_blank">Puma</a>
            </Link>
          </div>
          <div className={styles['brands-card']}>
            <Image src="/adidas-logo.png" alt="Adidas" width={214} height={200}/>
            <Link href="/brands/adidas" >
              <a className={styles['brands-btn']} target="_blank">Adidas</a>
            </Link>
          </div>

          <div className={styles['brands-card']}>
            <Image src="/dummy.png" alt="brans" width={214} height={200}/>
            <Link href="/" >
              <a className={styles['brands-btn']} target="_blank">brands</a>
            </Link>
          </div>
          <div className={styles['brands-card']}>
            <Image src="/dummy.png" alt="brans" width={214} height={200}/>
            <Link href="/" >
              <a className={styles['brands-btn']} target="_blank">brands</a>
            </Link>
          </div>
          <div className={styles['brands-card']}>
            <Image src="/dummy.png" alt="brans" width={214} height={200}/>
            <Link href="/" >
              <a className={styles['brands-btn']} target="_blank">brands</a>
            </Link>
          </div>
          <div className={styles['brands-card']}>
            <Image src="/dummy.png" alt="brans" width={214} height={200}/>
            <Link href="/" >
              <a className={styles['brands-btn']} target="_blank">brands</a>
            </Link>
          </div>
        </div>

        
      </div>
    );
  }
   
  export default Brands;