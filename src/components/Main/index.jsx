import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles/Main.module.scss'

function Main() {
    const language = useSelector((state) => state.language.value)

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>{language.title}</h1>
            <input placeholder={language.placeholder} />
        </main>
    )
}

export default Main