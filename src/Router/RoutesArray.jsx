import { Navigate } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Cv from "../Pages/Cv";
import Qr from "../Pages/Qr";
import Settings from "../Pages/Settings";
import GithubSearch from "../Pages/GithubSearch";
import BusinessCard from "../Pages/BusinessCard";
import SiteMap from "../Pages/SiteMap";
import Projects from "../Pages/Projects";
import Project from "../Pages/Project";
import Appearance from "../Components/Settings/Appearance";
import Permissions from "../Components/Settings/Permissions";
import Notifications from "../Components/Settings/Notifications";
import Storage from "../Components/Settings/Storage";
import DeviceInfo from "../Components/Settings/DeviceInfo";
import SettingsV2 from "../Pages/SettingsV2";

export const RoutesArray = [
    { name: "Home", path: "/", element: <Navigate to="/Visitkort" />, display: false },
    { name: "Home", path: "/Home", element: <Home />, display: false },
    { name: "Visitkort", path: "/Visitkort", element: <BusinessCard />, display: true },
    { name: "Projektor", path: "/Projektor", element: <Projects />, display: true },
    { name: "Vanderhoef", path: "/Projektor/Vanderhoef", element: <Project />, display: false },
    { name: "Curriculum Vitae", path: "/Cv", element: <Cv />, display: true },
    { name: "GitHub Search", path: "/GithubSearch", element: <GithubSearch />, display: false },
    { name: "Settings", path: "/Settings", element: <Settings />, display: false },
    { name: "SettingsV2", path: "/Settingsv2", element: <SettingsV2 />, display: false },
    { name: "Appearance", path: "/Settingsv2/Appearance", element: <Appearance />, display: false },
    { name: "Permissions", path: "/Settingsv2/Permissions", element: <Permissions />, display: false },
    { name: "Notifications", path: "/Settingsv2/Notifications", element: <Notifications />, display: false },
    { name: "Storage", path: "/Settingsv2/Storage", element: <Storage />, display: false },
    { name: "DeviceInfo", path: "/Settingsv2/DeviceInfo", element: <DeviceInfo />, display: false },
    { name: "QR", path: "/Qr/:themeColor", element: <Qr />, display: false },
    { name: "Sitemap", path: "/Sitemap", element: <SiteMap />, display: false },
    { name: "Sitemap XML", path: "/sitemap.xml", element: null, display: false },
    { name: "Robots TXT", path: "/robots.txt", element: null, display: false },
    { name: "404 Not Found", path: "*", element: <NotFound />, display: false },
];
