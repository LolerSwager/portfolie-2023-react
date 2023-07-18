import { useEffect } from "react"
import { toast } from "react-toastify"
import { FaKey, FaSwatchbook, FaWrench } from "react-icons/fa6"
import Weather from "./Weather/Weather"
import { RemoveLS } from "../Hooks/useToLocalStorage"
import WeatherIcons from "./Weather/WeatherIcons"
import { useNavigate } from "react-router-dom"

export default function KeyAction() {
    const navigate = useNavigate()

    useEffect(() => {
        document.addEventListener("keydown", detectKeyDown, true)
    }, [])

    function detectKeyDown(event) {
        console.log("Clicked key: ", event.key)

        if (event.key === "w" && event.altKey) {
            toast(<Weather />, {
                closeOnClick: false,
                icon: <WeatherIcons />,
            })
        }
        if (event.key === "t" && event.altKey) {
            RemoveLS("color")
            toast("Custom Theme Removed", {
                closeOnClick: false,
                autoClose: 5000,
                icon: <FaSwatchbook />,
            })
        }
        if (event.key === "s" && event.altKey) {
            toast("Navigating to Settings", {
                closeOnClick: false,
                autoClose: 1000,
                icon: <FaWrench />,
            })
            return navigate("/settings")
        }
        if (event.key === "½") {
            toast(`Console`, {
                closeOnClick: false,
                icon: <FaKey />,
            })
        }
        if (event.key === "a") {
            toast(`Kosmetiker kort app`, {
                closeOnClick: false,
                icon: <FaKey />,
            })
            window.open("https://cardapp-dmqrjuc8r-lolerswager.vercel.app/", "about:blank", "width=400,height=600")
        }
        if (event.key === "ø") {
            toast(`You have pressed 'ø' key`, {
                closeOnClick: false,
                icon: <FaKey />,
            })
        }
    }
}
