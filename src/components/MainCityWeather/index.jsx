import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styles from '../../styles/MainCityWeather.module.scss';
import { capitalize } from '../../utils';


function MainCityWeather() {
    const {nextDays} = useSelector((state) => state.language.value)
    const {value} = useSelector((state) => state.data)
    let {city} = useParams()


  return (
    <main className={styles.main}>
        <h2>{value.name}</h2>
        <p className={styles.description}>{capitalize(value.weather[0].description)}</p>
        <div className={styles.weather}>
            <p>{Math.round(value.main.temp)}°</p>
            <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`}/>
        </div>
        <div className={styles.minmax}>
            <p><span>MAX:</span> {Math.round(value.main.temp_max)}°</p>
            <p><span>MIN</span>: {Math.round(value.main.temp_min)}°</p>
        </div>
        
        <div className={styles.next_days}>
        <Link to={`/${city}/nextDays`}><p>{nextDays}</p></Link>
        </div>
                
    </main>
  )
}

export default MainCityWeather


