import './App.css'
import { Header } from './Components/Header/Header.jsx'
import { WeatherCard } from './Components/WeatherCard/WeatherCard.jsx'
// STATE
import { useEffect, useState } from "react";
import { WeatherApi } from "./weatherApi/weatherApi.js"

function App() {
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    WeatherApi(30.8481, 30.3436)
      .then((data) => {
        console.log("Weather Data:", data)
         setWeather(data)
      })
  }, [])

  return (
    <>
      <Header />
      <WeatherCard
      weather={weather}/>
    </>
  )
}

export default App