import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, GenericContainer } from '../../components'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MainCityWeather from '../../components/MainCityWeather'
import { getData } from '../../redux/dataSlice'

export default function CityWeather() {

  const {data, language, scale} = useSelector((state) => state)
  const dispatch = useDispatch()
  let { city } = useParams();

  const Data = async () => {
    try{
    let data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.replace("-"," ")}&lang=${language.value.api}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=${scale.value === false ? "imperial": "metric"}`)
    let weatherData = data.data
    dispatch(getData(weatherData))
    }catch(err) {
      console.log("Error to get weather data")
    }
  }

  useEffect(()=>{
     Data()
  },[data.value, language.value, scale.value])


  return (
    <GenericContainer>
    <Container>
      <Header/>

      {data.value && <MainCityWeather/>}

      <Footer/>
    </Container>
    </GenericContainer>
  )
}






