import { WiCloud, WiDaySunny, WiDayThunderstorm, WiDust, WiFog, WiMeteor, WiRain, WiSandstorm, WiSmoke, WiSnow, WiTornado } from "react-icons/wi";

const weatherIconMap = {
    Clear: <WiDaySunny />,
    Clouds: <WiCloud />,
    Rain: <WiRain />,
    Drizzle: <WiCloud />,
    Thunderstorm: <WiDayThunderstorm />,
    Snow: <WiSnow />,
    Mist: <WiFog />,
    Haze: <WiFog />,
    Fog: <WiFog />,
    Squall: <WiFog />,
    Dust: <WiDust />,
    Ash: <WiDust />,
    Sand: <WiSandstorm />,
    Smoke: <WiSmoke />,
    Tornado: <WiTornado />,
    default: <WiMeteor />,
};

export default function WeatherIcons(weatherCondition) {
    console.log(weatherCondition);

    const weatherIcon = weatherIconMap[weatherCondition] || weatherIconMap.default;
    return weatherIcon;
}
