import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, GenericContainer } from '../../components'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MainNextDays from '../../components/MainNextDays'
import { nextDays } from '../../redux/dataSlice'

export default function CityWeather() {

  const {data, language, scale} = useSelector((state) => state)
  const dispatch = useDispatch()

  const addZero = (str) =>{
    if(str.length === 1){
      return `0${str}`
    }
  }

  const FiveDays = () =>{
    const arrayDate = []
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setMonth(tomorrow.getMonth() + 1)

    for (let index = 0; index < 5; index++) {
      tomorrow.setDate(tomorrow.getDate() + 1)
      let dayMonth = tomorrow.getDate()
      dayMonth = dayMonth.toString()
      let month = tomorrow.getMonth().toString()
      let year = tomorrow.getFullYear().toString()
      let string = `${year}-${addZero(month)}-${addZero(dayMonth)}`
      arrayDate.push(string)
    }
    return arrayDate

  }

  const Data = async (array) => {
    try{
    let arrayFive = []
    let dataNextDays = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?&q=${data.value.name}&lang=${language.value.api}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=${scale.value === false ? "imperial": "metric"}`)
    let filterArray = (dataNextDays.data.list).filter((each)=>{
      return (array[0] === each.dt_txt.split(' ')[0] || array[1] === each.dt_txt.split(' ')[0] || array[2] === each.dt_txt.split(' ')[0] || array[3] === each.dt_txt.split(' ')[0] || array[4] === each.dt_txt.split(' ')[0])
    })
 
    

    array.forEach((each)=>{
      let compare = each + " 00:00:00"
      filterArray.forEach((filter)=>{
        if(compare === filter.dt_txt){
          arrayFive.push(filter)
        }
      })
    })
    return arrayFive


    }catch(err) {
      console.log("Error: " + err)
    }
  }

  useEffect(()=>{

    let array = FiveDays()
      Data(array).then((arrayFive)=>{
        dispatch(nextDays(arrayFive))
      })
 

  },[language.value, scale.value])

  



  return (
    <GenericContainer>
      <Container>
        <Header/>
        {data.nextDays &&
          <MainNextDays data={data.nextDays}/>
        }
        <Footer/>
      </Container>
    </GenericContainer>
  )
}



