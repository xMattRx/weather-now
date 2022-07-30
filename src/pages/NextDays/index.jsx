import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../../components'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MainNextDays from '../../components/MainNextDays'

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
        <MainNextDays/>
      <Footer/>
    </Container>
    </div>
  )
}



