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
import SiteMap from "../Pages/SiteMap";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="githubSearch" element={<GithubSearch />} />
            <Route path="/businessCard" element={<BusinessCard />} />
            <Route path="/Visitkort" element={<BusinessCard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/test" element={<Test />} />
            <Route path="/qr/:themeColor" element={<Qr />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/sitemap" element={<SiteMap />} />
            <Route path="/sitemap.xml" />
            <Route path="/robots.txt " />
        </Routes>
    );
}
