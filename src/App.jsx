import './App.css'
import { Header } from './Components/Header/Header.jsx'
import { WeatherCard } from './Components/WeatherCard/WeatherCard.jsx'
// STATE
import { useEffect, useState } from "react";
import { WeatherApi } from "./weatherApi/weatherApi.js"
import { useTranslation } from "react-i18next"
function App() {
  const { i18n } = useTranslation()
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    WeatherApi(30.8481, 30.3436)
      .then((data) => {
        console.log("Weather Data:", data)
         setWeather(data)
          document.documentElement.dir =
            i18n.language === "ar" ? "rtl" : "ltr";

        document.documentElement.lang = i18n.language;
      })
  }, [i18n.language])

  return (
    <>
      <Header />
      <WeatherCard
      weather={weather}/>
    </>
  )
}

export default App