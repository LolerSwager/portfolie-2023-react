import { Routes, Route } from "react-router-dom"
import NotFound from "../Pages/NotFound"
import Home from "../Pages/Home"

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
