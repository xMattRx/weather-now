import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Scale } from '..';
import { changeScale } from '../../redux/scaleSlice';
import styles from '../../styles/TemperatureType.module.scss';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 50,
    height: 30,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        marginLeft: 4,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(20px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#D2B3C1' : '#D2B3C1',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#D2B3C1',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 20,
        height: 20,
        marginTop: 2,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26,
        backgroundColor: theme.palette.mode === 'light' ? 'rgba(28, 36, 40, 0.49)' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

//TRUE === F
//FALSE === C

function TemperatureType() {
    const {value} = useSelector((state) => state.scale)
    const dispatch = useDispatch()

    return (
        <div className={styles.container}>
            <Scale className={styles.scaleF}>°F</Scale>
            <IOSSwitch onClick={() => {               
                        dispatch(changeScale())
                    }} />
            <Scale className={styles.scaleC}>°C</Scale>
        </div>
    )
}

export default TemperatureType



