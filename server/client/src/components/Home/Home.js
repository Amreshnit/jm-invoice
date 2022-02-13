import React from 'react'
import styles from './Home.module.css'

const Home = () => {
   
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero}>
                <h1>Easiest Invoicing for Small Businesses</h1>
                <div className={styles.paragraph}>
                   
                    <p>JM-Invoice application made with MongoDB, Express, React & Nodejs</p>
                </div>
                <div className={styles.imgContainer}>
                    <img src="https://res.cloudinary.com/ddp9vluwk/image/upload/v1644082678/u5nvixghaqbstkje1pqt.png" alt="invoicing-app"/>
                </div>
            </section>
        </div>
    )
}

export default Home
