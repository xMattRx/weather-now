import React, { useState } from 'react'
import scriptLoader from 'react-async-script-loader'
import PlacesAutocomplete from 'react-places-autocomplete'
import { useSelector } from 'react-redux'
import styles from '../../styles/Main.module.scss'

function Main({isScriptLoaded, isScriptLoadSucceed}) {
    const language = useSelector((state) => state.language.value)
    const [address, setAddress] = useState("");

    // REACT_APP_WEATHER_KEY
    // REACT_APP_GOOGLE_KEY

    const handleChange = (value) =>{
        setAddress(value)
    }

    const handleSelect = (value) =>{
        
        setAddress(value)
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
                            {suggestions.filter((suggestion,index)=>{
                                console.log(suggestion)
                                return suggestion.description.includes('Brasil')
                            }).map((suggestion, index)=>{
                                return(
                                    <div key={index} {...getSuggestionItemProps(suggestion)}>
                                        <p>{suggestion.description}</p>
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

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&libraries=places`])(Main)

