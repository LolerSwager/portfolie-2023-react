import Axios from "axios"
import { useEffect, useState } from "react"

export default function Weather() {
    const [weatherData, setWeatherData] = useState("Loading...")
    const [lat, setLat] = useState(57.442711)
    const [lon, setLon] = useState(10.521006)

    console.log(lat, lon)

    const geolocationAPI = navigator.geolocation
    const getUserCoordinates = () => {
        if (!geolocationAPI) {
            console.log("Geolocation API is not available in your browser!")
        } else {
            geolocationAPI.getCurrentPosition(
                (position) => {
                    const { coords } = position
                    setLat(coords.latitude)
                    setLon(coords.longitude)
                },
                (error) => {
                    console.log("Something went wrong getting your position!")
                }
            )
        }
    }

    useEffect(() => {
        const openweathermapUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6e58d95096d95702f9701b3503f746d6&units=metric&mode=JSON`
        Axios.get(openweathermapUrl)
            .then(function (response) {
                // handle success
                setWeatherData(response.data.name + " " + Math.round(response.data.main.temp) + " °C")
                console.log(response.data.main.temp)
            })
            .catch(function (error) {
                // handle error
                setWeatherData("error")
                console.log(error)
            })
    }, [lat, lon])

    return (
        <div className="weather" onClick={() => getUserCoordinates()} title="Click mig for at se dit område">
            <h3>{weatherData}</h3>
        </div>
    )
}
