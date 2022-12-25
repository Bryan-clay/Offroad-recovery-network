import React, {useState, useEffect} from 'react'
import axios from 'axios'

function  Weather({lat, lng, setLat, setLng}) {
    const getWeather = async () => {
    const url = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d7fd00a608e719d14594bb420c82552d
`);
console.log(url.data)
    }

useEffect (() => {
    getWeather()
},[])


  return (
    <div>
      
    </div>
  )
}

export default Weather
