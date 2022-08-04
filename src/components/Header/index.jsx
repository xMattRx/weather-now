import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setError } from '../../redux/dataSlice';
import styles from '../../styles/Header.module.scss';
import TemperatureType from '../TemperatureType';


function Header() {
        const data = useSelector((state) => state.data.error)
        const dispatch = useDispatch()
        const navigate = useNavigate();
        let {city} = useParams()

    return (
        <header className={styles.header}>
            {city && <BsArrowLeft onClick={() =>{ navigate(-1); dispatch(setError(undefined))}} className={styles.arrow} />}
            {!city && <div></div>}
            <TemperatureType />
        </header>
    )
}

export default Header;