import { Routes, Route } from "react-router-dom"
import NotFound from "../Pages/NotFound"
import Home from "../Pages/Home"
import Cv from "../Pages/cv"

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
