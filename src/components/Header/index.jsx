import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import styles from '../../styles/Header.module.scss';
import TemperatureType from '../TemperatureType';


function Header() {
    const data = useSelector((state) => state.language.data)
    console.log(data)
    return (
        <header className={styles.header}>
            {data && <BsArrowLeft className={styles.arrow} />}
            {!data && <div></div>}
            <TemperatureType />
        </header>
    )
}

export default Header;