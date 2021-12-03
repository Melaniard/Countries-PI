import React from 'react'
import styles from './Pages.module.css'

export default function Pages({ amountPerPage, totalAmount, pageNumber }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalAmount / amountPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className={styles.numBar}>
            <div className={styles.numContainer}>
                {pageNumber &&
                    pageNumbers.map((num) => {
                        return (
                            <button
                                key={num}
                                className={styles.number}
                                onClick={() => pageNumber(num)}
                            >
                                {num}
                            </button>
                        )
                    })}
            </div>
        </nav>
    )
}