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
    { name: "Home", path: "/Home", element: <Home />, display: false },
    { name: "Visitkort", path: "/Visitkort", element: <BusinessCard />, display: true },
    { name: "Curriculum Vitae", path: "/Cv", element: <Cv />, display: true },
    { name: "Projektor", path: "/Projektor", element: <Projects />, display: true },
    { name: "Vanderhoef", path: "/Projektor/Vanderhoef", element: <Project />, display: false },
    { name: "GitHub Search", path: "/GithubSearch", element: <GithubSearch />, display: false },
    { name: "Settings", path: "/Settings", element: <Settings />, display: false },
    { name: "Phone Number", path: "/Ph", element: <Number />, display: false },
    { name: "QR", path: "/Qr/:themeColor", element: <Qr />, display: false },
    { name: "Sitemap", path: "/Sitemap", element: <SiteMap />, display: false },
    { name: "Sitemap XML", path: "/sitemap.xml", element: null, display: false },
    { name: "Robots TXT", path: "/robots.txt", element: null, display: false },
    { name: "404 Page Not Found", path: "*", element: <NotFound />, display: false },
];
