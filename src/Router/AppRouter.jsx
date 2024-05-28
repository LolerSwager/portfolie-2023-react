import { Routes, Route } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Cv from "../Pages/cv";
import Qr from "../Pages/Qr";
import Settings from "../Pages/Settings";
import Projects from "../Pages/Projects";
import Test from "../Pages/test";
import BusinessCard from "../Pages/BusinessCard";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/qr/:themeColor" element={<Qr />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/test" element={<Test />} />
            <Route path="/BusinessCard" element={<BusinessCard />} />
        </Routes>
    );
}
