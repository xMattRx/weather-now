import React from 'react';
import cloud from '../../assets/images/cloud.svg';
import storm from '../../assets/images/storm.svg';
import sun from '../../assets/images/sun.svg';
import sun_cloud from '../../assets/images/sun_cloud.svg';
import styles from '../../styles/DayWeek.module.scss';

export default function DayWeek(data) {

    console.log(data)

    function Storm(){
        return(
            <img className={styles.weather} src={storm} alt="storm"/>
        )
    }
    function Cloud(){
        return(
            <img className={styles.weather} src={cloud} alt="cloud"/>
        )
    }
    function Sun(){
        return(
            <img className={styles.weather} src={sun} alt="sun"/>
        )
    }
    function SunCloud(){
        return(
            <img className={styles.weather} src={sun_cloud} alt="storm"/>
        )
    }
    

  return (
    <div className={styles.container}>
        <p className={styles.day}>Qua, 27 Jul</p>
        {Storm()}
        <p className={styles.min}>13°</p>
        <div className={styles.line}/>
        <p className={styles.max}>25°</p>
        <p className={styles.status}>céu limpo</p>
    </div>
  )
}
