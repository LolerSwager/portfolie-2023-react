import { Routes, Route } from "react-router-dom"
import NotFound from "../Pages/NotFound"
import Home from "../Pages/Home"
import Cv from "../Pages/cv"
import Qr from "../Pages/Qr"
import Settings from "../Pages/Settings"
import Projects from "../Pages/Projects"

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/qr/:themeColor" element={<Qr />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}
