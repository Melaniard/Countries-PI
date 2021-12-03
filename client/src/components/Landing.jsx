import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Welcome to Countries PI</h1>
                <h3 className={styles.text}>
                    Would you like to know it a little better? <br /> Let's go somewhere...
                </h3>
                <Link to='/countries'>
                    <button className={styles.btn}>Go explore!</button>
                </Link>
                <p className={styles.footer}>A project by Melania Dabrowski</p>
            </div>
        </div>
    )
}