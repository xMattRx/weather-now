import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/MainNextDays.module.scss';
import DayWeek from '../DayWeek';

export default function MainNextDays() {

    const {nextDays} = useSelector((state) => state.language.value)


    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    function removeSee(){
        let phrase = nextDays.split(" ").slice(1)
        phrase = phrase.toString().replaceAll(","," ")
        return capitalize(phrase)
    }

  return (
    <main className={styles.main}>
        <h2>Belo horizonte</h2>
        <p className={styles.description}>{removeSee()}</p>
        <div className={styles.containerDays}>
            <DayWeek/>
            <DayWeek/>
            <DayWeek/>
            <DayWeek/>
            <DayWeek/>
        </div>
    
    </main>
  )
}


