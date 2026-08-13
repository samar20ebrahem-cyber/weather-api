import '../WeatherCard/WeatherCard.css'
import { useTranslation } from "react-i18next"
function getWeatherDescription(code) {

    if (code === 0) {
        return "weather.clearSky";
    }

    if (code === 1 || code === 2 || code === 3) {
        return "weather.partlyCloudy";
    }

    if (code === 45 || code === 48) {
        return "weather.fog";
    }

    if (code >= 51 && code <= 57) {
        return "weather.drizzle";
    }

    if (code >= 61 && code <= 67) {
        return "weather.rain";
    }

    if (code >= 71 && code <= 77) {
        return "weather.snow";
    }

    if (code >= 80 && code <= 82) {
        return "weather.rainShowers";
    }

    if (code >= 95) {
        return "weather.thunderstorm";
    }

    return "weather.unknown";
}


export function WeatherCard({ weather }) {
    const { t, i18n } = useTranslation()
    const formattedDate = weather
    ? new Date(weather.daily.time[0]).toLocaleDateString(
        i18n.language === "ar" ? "ar-EG" : "en-EG",
        {
            weekday: "long",
            day: "numeric",
            month: "long"
        }
    )
    : "--";

    return (
        <>
            <section className="weather-card">
                <div className="weather-header">
                    <div className="weather-location">
                        <h2>{t("weather.location")}</h2>
                        <p>{formattedDate}</p>
                    </div>
                </div>
                <div className="temperature">
                    <h1> {weather ? weather.current.temperature_2m : "--"}</h1>
                    <span>°C</span>
                </div>
                <div className="weather-icon">
                    {/* أيقونة الطقس هنا */}
                </div>

                <p className="weather-description">
                    {weather
                        ? t(getWeatherDescription(weather.current.weather_code))
                        : "--"}
                </p>

                <div className="temperature-range">
                    <div>
                        <p>{t("weather.min")}</p>
                        <strong>{weather ? weather.daily.temperature_2m_min[0] : '--'}°C</strong>
                    </div>
                    <div>
                        <p>{t("weather.max")}</p>
                        <strong>{weather ? weather.daily.temperature_2m_max[0] : '--'}°C</strong>
                    </div>
                </div>
            </section>
        </>
    )
}

