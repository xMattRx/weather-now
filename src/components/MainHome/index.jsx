import React, { useEffect, useState } from 'react';
import scriptLoader from 'react-async-script-loader';
import PlacesAutocomplete from 'react-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getData } from '../../redux/dataSlice';
import styles from '../../styles/MainHome.module.scss';

function MainHome({isScriptLoaded, isScriptLoadSucceed}) {
    const language = useSelector((state) => state.language.value)
    const [address, setAddress] = useState("");
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getData(undefined))
    },[])

    // REACT_APP_WEATHER_KEY
    // REACT_APP_GOOGLE_KEY

    const handleChange = (value) =>{
        setAddress(value)
    }
    const handleSelect = (value) =>{
        setAddress(value)
    }
    const formatString = (string) =>{
        return string.replaceAll(" ", '-')
    }


    if(isScriptLoaded && isScriptLoadSucceed){
        return <main className={styles.main}>
            <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect} searchOptions={{types: ['(cities)'],}}>
                {({getInputProps, suggestions, getSuggestionItemProps, loading})=>(
                    <>
                        <h1 className={styles.title}>{language.title}</h1>
                        <input 
                        {...getInputProps({
                            placeholder: `${language.placeholder}`,
                        })} />

                        <div className={styles.container_suggestions}>
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion, index)=>{
                                return(
                                        <div key={index} {...getSuggestionItemProps(suggestion)}>
                                            <Link to={`/${formatString(suggestion.formattedSuggestion.mainText)}`}><p>{suggestion.description}</p></Link>
                                        </div>
                                )
                            })}
                        </div>
                    </>
                )}
            </PlacesAutocomplete>

        </main>
    }else{
        <div></div>
    }
}

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&libraries=places`])(MainHome)
