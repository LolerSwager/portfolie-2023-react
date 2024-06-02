import { Routes, Route } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Cv from "../Pages/cv";
import Qr from "../Pages/Qr";
import Settings from "../Pages/Settings";
import GithubSearch from "../Pages/GithubSearch";
import Test from "../Pages/test";
import BusinessCard from "../Pages/BusinessCard";
import Projects from "../Pages/Projects";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="GithubSearch" element={<GithubSearch />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/qr/:themeColor" element={<Qr />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/test" element={<Test />} />
            <Route path="/BusinessCard" element={<BusinessCard />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/sitemap.xml" />
            <Route path="/robots.txt " />
        </Routes>
    );
}
