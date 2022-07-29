import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import styles from '../../styles/Header.module.scss';
import TemperatureType from '../TemperatureType';


function Header() {
    return (
        <header className={styles.header}>
            <BsArrowLeft className={styles.arrow} />
            <TemperatureType />
        </header>
    )
}

export default Header;