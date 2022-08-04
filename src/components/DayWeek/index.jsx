import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/DayWeek.module.scss';
import { capitalize, dayOfWeekLanguage, monthLanguage } from '../../utils/index';

export default function DayWeek({data}) {

    const {language} = useSelector((state) => state.language.value)

    const dateString = data.dt_txt.split(' ')[0];
    console.log(dateString)
    const year = parseInt(dateString.substring(0, 4))
    const month = parseInt(dateString.substring(5, 7))
    const day = parseInt(dateString.substring(8, 10))

    const date = new Date();
    date.setFullYear(year,month,day);

  return (
    <div className={styles.container}>
        <div className={styles.distance}>
            <p className={styles.day}>{`${dayOfWeekLanguage(language, date.getDay()).substring(0,3)}, ${date.getDate()} ${monthLanguage(language, date.getMonth())}`}</p>
        </div>
        <div className={styles.lineContainer}>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
            <p className={styles.min}>{Math.round(data.main.temp_min)}°</p>
            <div className={styles.line}/>
            <p className={styles.max}>{Math.round(data.main.temp_max)}°</p>
        </div>
            <p className={styles.status}>{capitalize(data.weather[0].description)}</p>
        
    </div>
  )
}


// 