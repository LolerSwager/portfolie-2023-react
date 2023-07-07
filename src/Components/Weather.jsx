import Axios from "axios"
import { useEffect, useState } from "react"

export default function Weather() {
    const [weatherData, setWeatherData] = useState("Loading...")
    const [lat, setLat] = useState(57.442711)
    const [long, setLong] = useState(10.521006)

    const geolocationAPI = navigator.geolocation
    const getUserCoordinates = () => {
        if (!geolocationAPI) {
            console.log("Geolocation API is not available in your browser!")
        } else {
            geolocationAPI.getCurrentPosition(
                (position) => {
                    const { coords } = position
                    setLat(coords.latitude)
                    setLong(coords.longitude)
                },
                (error) => {
                    console.log("Something went wrong getting your position!")
                }
            )
        }
    }

    useEffect(() => {
        getUserCoordinates()
        const openweathermapUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6e58d95096d95702f9701b3503f746d6&units=metric&mode=JSON`
        Axios.get(openweathermapUrl)
            .then(function (response) {
                // handle success

                setWeatherData(response.data.name + " " + Math.round(response.data.main.temp) + " °C")
                console.log(response.data.main.temp)
            })
            .catch(function (error) {
                // handle error
                console.log(error)
            })
    }, [])

    return weatherData
}
