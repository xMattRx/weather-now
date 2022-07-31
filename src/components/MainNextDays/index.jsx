import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/MainNextDays.module.scss';
import { capitalize } from '../../utils';
import DayWeek from '../DayWeek';

export default function MainNextDays({data}) {
  console.log(data)

    const {nextDays} = useSelector((state) => state.language.value)
    const {value} = useSelector((state) => state.data)

    function removeSee(){
        let phrase = nextDays.split(" ").slice(1)
        phrase = phrase.toString().replaceAll(","," ")
        return capitalize(phrase)
    }

  return (
    <main className={styles.main}>
        <h2>{value.name}</h2>
        <p className={styles.description}>{removeSee()}</p>
        <div className={styles.containerDays}>
            {data.map((element,i)=>{

              return <DayWeek data={element}/>

            })}

        </div>
    
    </main>
  )
}


