import { Navigate } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Cv from "../Pages/Cv";
import Qr from "../Pages/Qr";
import Settings from "../Pages/Settings";
import GithubSearch from "../Pages/GithubSearch";
import Test from "../Pages/Test";
import Number from "../Pages/Number";
import BusinessCard from "../Pages/BusinessCard";
import SiteMap from "../Pages/SiteMap";
import Projects from "../Pages/Projects";
import Project from "../Pages/Project";

export const RoutesArray = [
    { name: "Home", path: "/", element: <Navigate to="/Visitkort" />, display: false },
    { name: "Home", path: "/home", element: <Home />, display: false },
    { name: "Visitkort", path: "/Visitkort", element: <BusinessCard />, display: true },
    { name: "Curriculum Vitae", path: "/cv", element: <Cv />, display: true },
    { name: "Projektor", path: "/Projektor", element: <Projects />, display: true },
    { name: "Vanderhoef", path: "/Projektor/Vanderhoef", element: <Project />, display: false },
    { name: "GitHub Search", path: "/githubSearch", element: <GithubSearch />, display: false },
    { name: "Settings", path: "/settings", element: <Settings />, display: false },
    { name: "Test", path: "/test", element: <Test />, display: false },
    { name: "Phone Number", path: "/ph", element: <Number />, display: false },
    { name: "QR", path: "/qr/:themeColor", element: <Qr />, display: false },
    { name: "Sitemap", path: "/sitemap", element: <SiteMap />, display: false },
    { name: "Sitemap XML", path: "/sitemap.xml", element: null, display: false },
    { name: "Robots TXT", path: "/robots.txt", element: null, display: false },
    { name: "404 Page Not Found", path: "*", element: <NotFound />, display: false },
];
