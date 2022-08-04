import React from 'react'
import styles from '../../styles/Error.module.scss'
import { capitalize } from '../../utils/index'
export default function Error({message, submessage}) {
    return (
        <div className={styles.container}>
            <h2>{message}</h2>
            <p>{capitalize(submessage)}</p>
        </div>
    )
}
