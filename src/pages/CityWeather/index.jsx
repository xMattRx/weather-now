import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../../components'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MainCityWeather from '../../components/MainCityWeather'

export default function CityWeather() {

  const {data} = useSelector((state) => state.data)
  const dispatch = useDispatch()

  console.log(data)

  return (
    <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
    <Container>
      <Header/>
      <MainCityWeather/>
      <Footer/>
    </Container>
    </div>
  )
}



