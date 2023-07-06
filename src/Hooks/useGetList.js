import { useState, useEffect } from "react"
import axios from "axios"

export const useGetList = (endpoint) => {
    const [state, setState] = useState([])

    useEffect(() => {
        const fetchApiData = async () => {
            const response = await axios.get(endpoint)

            try {
                if (response.data) {
                    console.log(response.data)
                    setState(response.data.items)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchApiData()
    }, [endpoint])

    return { state }
}