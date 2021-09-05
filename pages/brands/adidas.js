import Link from "next/link";
import Image from "next/image";
import Head from 'next/head'
import styles from "../../styles/all-brands.module.css"

const Adidas = () => {
    return (
        <div id="adidas">
            <Head>
                <title>Brands | Adidas</title>
                <meta name="keywords" content="brands"></meta>
            </Head>
            
            <div className={styles['halaman-brands']}>
                <div className={styles['halaman-text']}>
                    <h1>Adidas</h1>
                    <p>Adipisicing aliquip enim amet aliqua nulla duis consequat aliqua. Minim qui fugiat Lorem ex exercitation et nisi adipisicing cupidatat. Culpa incididunt cupidatat adipisicing aliqua eiusmod adipisicing incididunt incididunt labore incididunt quis Lorem enim dolore. Irure cillum laboris proident sunt sit irure consectetur ut ipsum incididunt. Sit occaecat qui ullamco amet eu deserunt.</p>
                </div>

                <div className={styles['flex-container']} >
                    <div className={styles['flex-content1']}>
                        <div className={styles['img-kiri']} >
                            <Image src="/Adidas-ab.jpg" alt="Adidas" width="550" height="700"/>
                        </div>
                        
                        <div className={styles['text-kanan']} >
                            <h2>About</h2>
                            <p>Elit quis magna commodo dolore anim minim do quis ex eu. Voluptate consequat pariatur aute veniam id in et ipsum do pariatur consequat esse consectetur eiusmod. Reprehenderit in ut nulla laborum culpa aliquip cillum culpa proident consectetur cillum adipisicing. Est ad Lorem fugiat excepteur adipisicing. Est irure ex elit irure nisi id id proident aliquip.</p>
                        </div>
                    </div>

                    <div className={styles['flex-content2']}>                        
                        <div className={styles['text-kiri']} >
                            <h2>Innovation</h2>
                            <p>Elit quis magna commodo dolore anim minim do quis ex eu. Voluptate consequat pariatur aute veniam id in et ipsum do pariatur consequat esse consectetur eiusmod. Reprehenderit in ut nulla laborum culpa aliquip cillum culpa proident consectetur cillum adipisicing. Est ad Lorem fugiat excepteur adipisicing. Est irure ex elit irure nisi id id proident aliquip.</p>
                        </div>

                        <div className={styles['img-kanan']} >
                            <Image src="/Adidas-in.jpg" alt="Adidas" width="500" height="700"/>
                        </div>
                    </div>

                    <div className={styles['flex-content3']}>
                        <div className={styles['img-kiri']} >
                            <Image src="/Adidas-team.jpg" alt="Adidas" width="550" height="700"/>
                        </div>
                        
                        <div className={styles['text-kanan']} >
                            <h2>Our Team</h2>
                            <p>Elit quis magna commodo dolore anim minim do quis ex eu. Voluptate consequat pariatur aute veniam id in et ipsum do pariatur consequat esse consectetur eiusmod. Reprehenderit in ut nulla laborum culpa aliquip cillum culpa proident consectetur cillum adipisicing. Est ad Lorem fugiat excepteur adipisicing. Est irure ex elit irure nisi id id proident aliquip.</p>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    );
}
export default Adidas;