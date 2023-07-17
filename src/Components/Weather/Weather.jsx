import Axios from "axios"
import { useEffect, useState, useCallback } from "react"
import WeatherIcons from "./WeatherIcons"

export default function Weather() {
    const [weatherData, setWeatherData] = useState("Loading...")
    const [lat, setLat] = useState(57.442711)
    const [lon, setLon] = useState(10.521006)

    const getUserCoordinates = useCallback(() => {
        const geolocationAPI = navigator.geolocation
        if (!geolocationAPI) {
            console.error("Geolocation API is not available in your browser!")
        } else {
            geolocationAPI.getCurrentPosition(
                (position) => {
                    const { coords } = position
                    setLat(coords.latitude)
                    setLon(coords.longitude)
                },
                (error) => {
                    console.error("Something went wrong getting your position!")
                }
            )
        }
    }, [])

    useEffect(() => {
        getUserCoordinates()
    }, [getUserCoordinates])

    useEffect(() => {
        const openweathermapUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6e58d95096d95702f9701b3503f746d6&units=metric&mode=JSON`
        Axios.get(openweathermapUrl)
            .then(function (response) {
                setWeatherData(response.data.name + " " + Math.round(response.data.main.temp) + " °C")
                WeatherIcons(response.data.weather[0].main)
            })
            .catch(function (error) {
                // handle error
                setWeatherData("Error")
                console.error(error)
            })
    }, [lat, lon])

    return (
        <div className="weather" onClick={() => getUserCoordinates()} title="Click mig for at se dit område">
            <h3>{weatherData}</h3>
        </div>
    )
}
