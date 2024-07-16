import { useEffect } from "react";
import { toast } from "react-toastify";
import { FaKey, FaSwatchbook, FaWrench, FaRoute, FaCode, FaMap } from "react-icons/fa6";
import { GiIsland } from "react-icons/gi";
import Weather from "./Weather/Weather";
import WeatherIcons from "./Weather/WeatherIcons";
import { RemoveLS } from "../Hooks/useToLocalStorage";
import { useNavigate } from "react-router-dom";

export default function KeyAction() {
    const navigate = useNavigate();

    useEffect(() => {
        document.addEventListener("keydown", detectKeyDown, true);
    }, []);

    function detectKeyDown(event) {
        console.log("Clicked key: ", event.key);

        // event.preventDefault()

        if (event.key === "m" && event.altKey) {
            toast("Navigating to Sitemap", {
                closeOnClick: false,
                autoClose: 1000,
                icon: <FaMap />,
            });
            return navigate("/settings");
        }
        if (event.key === "w" && event.altKey) {
            toast(<Weather />, {
                closeOnClick: false,
                icon: <WeatherIcons />,
            });
        }
        if (event.key === "t" && event.altKey) {
            RemoveLS("color");
            toast("Custom Theme Removed", {
                closeOnClick: false,
                icon: <FaSwatchbook />,
            });
        }
        if (event.key === "s" && event.altKey) {
            toast("Navigating to Settings", {
                closeOnClick: false,
                autoClose: 1000,
                icon: <FaWrench />,
            });
            return navigate("/settings");
        }
        if (event.key === "q" && event.altKey) {
            toast("Navigating back", {
                closeOnClick: false,
                autoClose: 1000,
                icon: <FaRoute />,
            });
            return navigate(-1);
        }
        if (event.key === "e" && event.altKey) {
            toast("Navigating forward", {
                closeOnClick: false,
                autoClose: 1000,
                icon: <FaRoute />,
            });
            return navigate(+1);
        }
        if (event.key === "a" && event.altKey) {
            toast(`Kosmetiker kort app`, {
                closeOnClick: false,
                icon: <FaKey />,
            });
            window.open("https://cardapp-dmqrjuc8r-lolerswager.vercel.app/", "about:blank", "width=400,height=600");
        }
        if (event.key === "½") {
            toast(`Console`, {
                closeOnClick: false,
                icon: <FaCode />,
            });
        }
        if (event.key === "ø") {
            toast(`You have pressed 'ø' key`, {
                closeOnClick: false,
                icon: <GiIsland />,
            });
        }
    }
}
