import { Navigate } from "react-router-dom";
import NotFound from "../Pages/Essential/NotFound";
import Home from "../Pages/Home";
import Cv from "../Pages/Cv";
import Qr from "../Pages/Essential/Qr";
import Settings from "../Pages/Settings/Settings";
import GithubSearch from "../Pages/GithubSearch";
import BusinessCard from "../Pages/BusinessCard";
import SiteMap from "../Pages/Essential/SiteMap";
import Projects from "../Pages/Projects/Projects";
import Project from "../Pages/Projects/Project";
import Appearance from "../Components/Settings/Appearance";
import Permissions from "../Components/Settings/Permissions";
import Notifications from "../Components/Settings/Notifications";
import Storage from "../Components/Settings/Storage";
import DeviceInfo from "../Components/Settings/DeviceInfo";
import SettingsV2 from "../Pages/Settings/SettingsV2";
import ServerPage from "../Pages/ServerPage";
import LoginPage from "../Pages/Login/LoginPage";
import SuccessPage from "../Pages/Login/SuccessPage";

export const RoutesArray = [
    { name: "Home", path: "/", element: <Navigate to="/Visitkort" />, display: false, requireLogin: false },
    { name: "Home", path: "/Home", element: <Home />, display: false, requireLogin: false },
    { name: "Visitkort", path: "/Visitkort", element: <BusinessCard />, display: true, requireLogin: false },
    { name: "Projektor", path: "/Projektor", element: <Projects />, display: true, requireLogin: false },
    { name: "Vanderhoef", path: "/Projektor/Vanderhoef", element: <Project />, display: false, requireLogin: false },
    { name: "Curriculum Vitae", path: "/Cv", element: <Cv />, display: true, requireLogin: false },
    { name: "GitHub Search", path: "/GithubSearch", element: <GithubSearch />, display: false, requireLogin: false },
    { name: "Settings", path: "/Settings", element: <Settings />, display: false, requireLogin: false },
    { name: "SettingsV2", path: "/Settingsv2", element: <SettingsV2 />, display: false, requireLogin: false },
    { name: "Appearance", path: "/Settingsv2/Appearance", element: <Appearance />, display: false, requireLogin: false },
    { name: "Permissions", path: "/Settingsv2/Permissions", element: <Permissions />, display: false, requireLogin: false },
    { name: "Notifications", path: "/Settingsv2/Notifications", element: <Notifications />, display: false, requireLogin: false },
    { name: "Storage", path: "/Settingsv2/Storage", element: <Storage />, display: false, requireLogin: false },
    { name: "DeviceInfo", path: "/Settingsv2/DeviceInfo", element: <DeviceInfo />, display: false, requireLogin: false },
    { name: "Server Page", path: "/server", element: <ServerPage />, display: false, requireLogin: true },
    { name: "Login Page", path: "/login", element: <LoginPage />, display: false, requireLogin: false },
    { name: "Success Page", path: "/success", element: <SuccessPage />, display: false, requireLogin: false },
    { name: "QR", path: "/Qr/:themeColor", element: <Qr />, display: false, requireLogin: false },
    { name: "Sitemap", path: "/Sitemap", element: <SiteMap />, display: false, requireLogin: false },
    { name: "Sitemap XML", path: "/sitemap.xml", element: null, display: false, requireLogin: false },
    { name: "Robots TXT", path: "/robots.txt", element: null, display: false, requireLogin: false },
    { name: "404 Not Found", path: "*", element: <NotFound />, display: false, requireLogin: false },
];
