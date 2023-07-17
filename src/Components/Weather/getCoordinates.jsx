import { useEffect, useState, useCallback } from "react"

export default function useCoordinates() {
    const [lat, setLat] = useState(57.442711)
    const [lon, setLon] = useState(10.521006)

    const UserCoordinates = useCallback(() => {
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

    return { lat, lon }
}
