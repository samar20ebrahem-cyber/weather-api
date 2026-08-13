import '../WeatherCard/WeatherCard.css'
 export function WeatherCard({ weather }) {
    return (
        <>
            <section className="weather-card">
                <div className="weather-header">
                    <div className="weather-location">
                        <h2>Beheira, Egypt</h2>
                        <p>{weather ? weather.daily.time[0] : '--'}</p>
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
                    Partly Cloudy
                </p>

                <div className="temperature-range">
                    <div>
                        <p>Min</p>
                        <strong>{weather ? weather.daily.temperature_2m_min[0] : '--'}°C</strong>
                    </div>
                    <div>
                        <p>Max</p>
                        <strong>{weather ? weather.daily.temperature_2m_max[0] : '--'}°C</strong>
                    </div>
                </div>
            </section>
        </>
    )
}

