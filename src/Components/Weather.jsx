import Axios from "axios"
import { useEffect, useState } from "react"

export default function Weather() {
    const [weatherData, setWeatherData] = useState("Loading...")

    useEffect(() => {
        const openweathermapUrl =
            "https://api.openweathermap.org/data/2.5/weather?lat=57.442711&lon=10.521006&appid=6e58d95096d95702f9701b3503f746d6&units=metric&mode=JSON"
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
