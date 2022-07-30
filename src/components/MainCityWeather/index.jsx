import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import cloud from '../../assets/images/cloud.svg';
import storm from '../../assets/images/storm.svg';
import sun from '../../assets/images/sun.svg';
import sun_cloud from '../../assets/images/sun_cloud.svg';
import styles from '../../styles/MainCityWeather.module.scss';


function Storm(){
    return(
        <img src={storm} alt="storm"/>
    )
}
function Cloud(){
    return(
        <img src={cloud} alt="cloud"/>
    )
}
function Sun(){
    return(
        <img src={sun} alt="sun"/>
    )
}
function SunCloud(){
    return(
        <img src={sun_cloud} alt="storm"/>
    )
}


function MainCityWeather() {
    const {nextDays} = useSelector((state) => state.language.value)
    let {city} = useParams()

  return (
    <main className={styles.main}>
        <h2>Belo Horizonte</h2>
        <p className={styles.description}>Nuvens dispersas</p>
        <div className={styles.weather}>
            <p>64°</p>
            {Storm()}
        </div>
        <div className={styles.minmax}>
            <p><span>MAX:</span> 29°</p>
            <p><span>MIN</span>: 14°</p>
        </div>
        
            <div className={styles.next_days}>
            <Link to={`/${city}/nextDays`}><p>{nextDays} <hr/></p></Link>
            </div>
                
    </main>
  )
}

export default MainCityWeather


